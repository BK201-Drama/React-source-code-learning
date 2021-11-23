import { renderComponent } from '../react-dom/index'

class Component {
  constructor (props = {}) {
    this.props = props;
    this.state = {}
  }

  setState (stateChange) {
    // 浅拷贝，将stateChange浅拷贝给this.state
    Object.assign(this.state, stateChange)
    // 数据改变实时渲染
    renderComponent(this)
  }
}

export default Component