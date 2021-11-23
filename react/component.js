// import {}

class Component {
  constructor (props = {}) {
    this.props = props;
    this.state = {}
  }

  setState (stateChange) {
    // 浅拷贝，将stateChange浅拷贝给this.state
    Object.assign(this.state, stateChange)
  }
}

export default Component