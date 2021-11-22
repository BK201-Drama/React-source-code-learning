const ReactDOM = {
  render
}

function render (vnode, container) {
  if (vnode === undefined) return
  if (vnode === 'string') {
    container.createTextNode(vnode)
    return container.createTextNode(vnode)
  }
}

export default ReactDOM