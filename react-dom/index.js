import Component from '../react/component'

const ReactDOM = {
  render
}

// 创建自定义组件
// vnode.tag, vnode.attrs
function createComponent (comp, props) {
  let inst
  // 原型链非空，还有render方法，那么一定是类组件
  if (comp.prototype && comp.prototype.render) {
    inst = new comp(props)
  } else {
    // 如果不是类组件，我们就也是用类组件创建
    inst = new Component(props)
    // 将构造函数赋值
    inst.constructor = comp
    inst.render = function () {
      return this.constructor(props)
    }
  }
  return inst
}

function renderComponent (comp) {
  let base

  const renderer = comp.render()

  console.log(renderer)

  base = _render(renderer)
  // console.log(base)
  comp.base = base
}

function setComponentProps (comp, props) {
  // 设置组件的属性
  comp.props = props
  renderComponent(comp)
}

function _render (vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = ''
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }

  // 判断是否为函数组件【根据tag来分析】
  if (typeof vnode.tag === 'function') {
    console.log("函数组件")
    // 1.创建组件
    const comp = createComponent(vnode.tag, vnode.attrs)
    // 2.设置组件的属性
    setComponentProps(comp, vnode.attrs)
    // 3.组件渲染的节点对象返回
    return comp.base
  }

  const { tag, attrs, childrens } = vnode
  const dom = document.createElement(tag)

  if (attrs) {
    Object.keys(attrs).forEach(key => {
      const value = attrs[key]
      setAttribute(dom, key, value)
    })
  }

  if (childrens?.length > 0) {
    for (let item of childrens) {
      render(item, dom)
    }
  }
  return dom
}

function render (vnode, container) {
  return container.appendChild(_render(vnode))
}

// 设置属性【value为key对应的键值】
function setAttribute (dom, key, value) {
  // 将属性名的className转换成class
  if (key === 'className') {
    key = 'class'
  }

  // 转换事件
  if (/on\w+/.test(key)) {
    key = key.toLowerCase()
    dom[key] = value || ''
  } else if (key === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '' 
    } else if (value && typeof value === 'object') {
      for(let k in value) {
        if (typeof value[k] === 'number') {
          dom.style[k] = value[k] + 'px'
        } else {
          dom.style[k] = value[k]
        }
      }
    }
  } else {
    if (key in dom) {
      dom[key] = value || ''
    }

    if (value) {
      dom.setAttribute(key, value)
    } else {
      dom.removeAttribute(key)
    }
  }
}

export default ReactDOM