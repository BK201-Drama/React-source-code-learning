import React from './react/index'
import ReactDOM from './react-dom/index'

// const ele = (
//   <div className="attrs">
//     123
//     <span>456</span>
//   </div>
// )

// function Home_ () {
//   return (
//     <div className="hello">
//       <span>123</span>
//     </div>
//   )
// }

class Homes extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      num: 0
    }
  }

  // 生命周期函数，我个人觉得我们需要在Component内部进行构建

  // componentWillMount () {
  //   console.log("组件开始加载")
  // }

  // componentWillReceiveProps (props) {
  //   console.log('props-加载', props)
  // }

  // componentWillUpdate () {
  //   console.log("组件将要更新")
  // }

  // componentDidUpdate () {
  //   console.log("组件已经更新")
  // }

  // componentDidMount () {
  //   console.log("组件加载完成")
  // }

  click = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  render () {
    return (
      <div className="rng">
        <span class="fuck">123456--{this.state.num}</span>
        <button onClick={this.click.bind(this)} class="U">+</button>
      </div>
    )
  }
}

// const ele = <Home_ name={"123123"}/>
// console.log(ele.tag)
// console.log(ele.tag)
var ele = <Homes />
console.log(ele.tag)

// console.log(element)

// const ele = 1

// ReactDOM.render(ele, document.querySelector('#root'))

// let element = 'str'
// console.log(element);

ReactDOM.render(<Homes name={'act'}/>, document.getElementById('root'))

// console.log(ele)