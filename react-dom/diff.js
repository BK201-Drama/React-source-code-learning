import { setAttribute } from "./index"

export function diff (dom, vnode, container) {
  // 对比节点的变化
  const ret = diffNode(dom, vnode)
  if (container) {
    container.appendChild(ret)
  }

  return ret
}

function diffNode (dom, vnode) {
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

  // 非文本dom节点
  if (!dom) {
    out = document.createElement(vnode.tag)
  }
  diffAttribute(out, vnode)
  return out
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
  for (let key in newAttrs) {
    // (key in oldAttrs) ? 
  }
}