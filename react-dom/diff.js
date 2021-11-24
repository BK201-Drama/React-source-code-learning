import { setAttribute, setComponentProps } from "./index"

export function diff (dom, vnode, container) {
  // 对比节点的变化
  const ret = diffNode(dom, vnode)
  if (container) {
    container.appendChild(ret)
  }

  return ret
}

export function diffNode (dom, vnode) {
  let out = dom
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = ''
  if (typeof vnode === 'number') {
    vnode = String(vnode)
  }
  if (typeof vnode === 'string') {
    if (dom && dom.nodeType === 3) {
      if (dom.textContent !== vnode) {
        dom.textContent = vnode
      }
    } else {
      out = document.createTextNode(vnode)
      if (dom && dom.parentNode) {
        dom.parentNode.replaceNode(out, dom)
      }
    }
    return out
  }
  if (typeof vnode.tag === 'function') {
    diffComponent(out, vnode)
  }

  // 非文本dom节点
  if (!dom) {
    out = document.createElement(vnode.tag)
  }
  // 比较子节点
  if ((vnode.childrens && vnode.childrens.length > 0) || (out.childNodes && out.childrens.length > 0)) {
    diffChildren(out, vnode.childrens)
  }
  diffAttribute(out, vnode)
  return out
}

function diffComponent (dom, vnode) {
  let comp = dom
  // 如果组件没有变化，只需要重新设置props即可
  if (comp && comp.constructor === vnode.tag) {
    // 重新设置props
    setComponentProps(comp, vnode.attrs)
    // 赋值
    dom = comp.base
  } else {
    // 组件类型发生变化
    if (comp) {
      // 移除旧的组件
      unmountComponent(comp)
      // 释放
      comp = null
    }

    // 创建新组件
    comp = createComponent(vnode.tag, vnode.attrs)
    // 设置组件属性
    setComponentProps(vnode.attrs)
    // 给当前挂载base
    dom = comp.base
  }
  return dom
}

function unmountComponent (comp) {
  removeNode(comp.base)
}

function removeNode (dom) {
  if (dom && dom.parentNode) {
    dom.parentNode.removeNode(dom)
  }
}

function diffChildren (dom, vchildren) {
  const domChildren = dom.childNodes
  const children = []
  const keyed = {}

  // 将有key的节点和没有key的节点分开
  if (domChildren.length > 0) {
    [...domChildren].forEach(item => {
      const key = item.key
      if (key) {
        keyed[key] = item
      } else {
        children.push(item)
      }
    })
  }
  if (vchildren &&vchildren.length > 0) {
    let min = 0
    let childrenLen = children.length;
    [...vchildren].forEach((vchild, i) => {
      const key = vchild.key
      let child
      if (key) {
        // 如果有key，找到对应key的节点
        if (keyed[key]) {
          child = keyed[key]
          keyed[key] = undefined
        } 
      } else if (childrenLen > min) {
        for (let j = min; j < childrenLen; j++) {
          let c = children[j]
          if (c) {
            child = c
            children[j] = undefined
            if (j === childrenLen - 1) {
              childrenLen--
            }
            if (j === min) {
              min++
            }
            break
          }
        }
      }
      child = diffNode(child, vchild)
      const f = domChildren[i]

      if (child && child !== dom && child !== f) {
        if (!f) {
          dom.appendChild(child)
        } else if (child === f.nextSibling) {
          removeNode(f)
        } else {
          dom.insertBefore(child, f)
        }
      }
    })
  }
}

function diffAttribute (dom, vnode) {
  // 保存之前的dom所有的属性
  const oldAttrs = {}
  const newAttrs = {}
  // dom是原有的节点对象，vnode是虚拟dom
  // 取出dom的属性
  const domAttrs = dom.attributes
  console.log(domAttrs);
  [...domAttrs].forEach(item => {
    oldAttrs[item.name] = item.value
  })
  console.log(oldAttrs)

  // 比较
  // 如果原来的属性跟新属性对比不在新属性中，则将其移除【属性值undefined就行】
  for (let key in oldAttrs) {
    if (!(key in newAttrs)) {
      setAttribute(dom, key, undefined)
    }
  }
  // 如果旧的属性和新属性不同，就改变旧的
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      setAttribute(dom, key, newAttrs[key])
    }
  }
}