const ReactDOM = {
  render
}

function render (vnode, container) {
  if (vnode === undefined) return
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode)
  }
}

export default ReactDOM