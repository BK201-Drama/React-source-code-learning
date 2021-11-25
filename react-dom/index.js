import Component from '../react/component'

import { diff, diffNode } from './diff'

const ReactDOM = {
  render
}

// 创建自定义组件
// vnode.tag, vnode.attrs
export function createComponent (comp, props) {
  let inst
  // 原型链非空，还有render方法，那么一定是类组件
  if (comp.prototype && comp.prototype.render) {
    // console.log("props", props)
    inst = new comp(props)
    // console.log("inst" ,inst)
  } else {
    // 如果不是类组件，我们就也是用类组件创建
    inst = new Component(props)
    // 将构造函数赋值，函数组件原来的tag就是函数本身，因此用于构造函数十分切合
    inst.constructor = comp
    // 每一个类组件都有一个render方法，对该render进行赋值给其他函数，并且是返回一个构造函数内部的jsx
    inst.render = function () {
      return this.constructor(props)
    }
  }
  return inst
}

// 这是为了给comp内部添加base对象而设置的函数
// 组件更新可以设置生命周期
export function renderComponent (comp) {
  // 定义组件内部的节点对象
  let base

  // 拿到了元素
  const renderer = comp.render
  // console.log(renderer)

  // renderer是获取了类组件内部的元素，但还是需要一层_render()函数解析，不然还是无法解析
  // base = _render(renderer)
  base = diffNode(comp.base, renderer)
  if (comp.base) {
    if (comp.componentWillUpdate) {
      comp.componentWillUpdate()
    }
    if (comp.componentDidUpdate) {
      comp.componentDidUpdate()
    }
  } else if (comp.componentDidMount) {
    comp.componentDidMount()
  }

  // if (comp.base && comp.base.parentNode) {
  //   // replaceChild是只能用于子组件，因此我们必须使用parentNode
  //   // 将base赋值给comp.base
  //   comp.base.parentNode.replaceChild(base, comp.base)
  // }
  comp.base = base
}

export function setComponentProps (comp, props) {
  if (!comp.base) {
    if (comp.componentWillMount) {
      comp.componentWillMount()
    }
    if (comp.componentWillReceiveProps) {
      comp.componentWillReceiveProps(props)
    }
  }
  // 设置组件的属性
  comp.props = props
  // 渲染组件
  renderComponent(comp)
}

function _render (vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = ''
  if (typeof vnode === 'number') {
    vnode = String(vnode)
  }
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }

  // 判断是否为函数组件或类组件【根据tag，也就是当前组件来分析】
  // 必须在render下才能将attrs变成props
  if (typeof vnode.tag === 'function') {
    // 1.创建组件
    const comp = createComponent(vnode.tag, vnode.attrs)
    // 2.设置组件的属性，在这里，所有的属性都在这里变成了props
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

function render (vnode, container, dom) {
  return diff(dom, vnode, container)
  // return container.appendChild(_render(vnode))
}

// 设置属性【value为key对应的键值】
export function setAttribute (dom, key, value) {
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