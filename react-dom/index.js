const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = ''
    return render (vnode, container)
  }
}

function render (vnode, container) {
  if (vnode === undefined) return
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    // console.log(textNode)
    return container.appendChild(textNode)
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
  return container.appendChild(dom)
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