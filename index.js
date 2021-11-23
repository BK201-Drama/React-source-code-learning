import React from './react/index'
import ReactDOM from './react-dom/index'

const element = (
  <div className="attrs">
    123
    <span>456</span>
  </div>
)

function Home () {
  return (
    <div className="hello">
      <span>123</span>
    </div>
  )
}

class Home_ extends React.Component{
  constructor (props) {
    super (props)
  }

  // 生命周期函数，我个人觉得我们需要在Component内部进行构建

  componentWillMount () {
    console.log("组件开始加载")
  }

  componentWillReceiveProps (props) {
    console.log('props')
  }

  componentWillUpdate () {
    console.log("组件将要更新")
  }

  componentDidUpdate () {
    console.log("组件已经更新")
  }

  componentDidMount () {
    console.log("组件加载完成")
  }

  render () {
    return (
      <div className="hello">
        <span>123456</span>
      </div>
    )
  }
}

const ele = <Home_ name={"123123"}/>
// console.log(ele.tag)
console.log(ele.tag)
// console.log(<Home />)

// console.log(element)

// const ele = 1

// ReactDOM.render(ele, document.querySelector('#root'))

// let element = 'str'
// console.log(element);

// ReactDOM.render(<Home_ name={'act'}/>, document.getElementById('root'))

// console.log(ele)