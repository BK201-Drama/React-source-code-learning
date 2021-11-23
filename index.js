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
  render () {
    return (
      <div className="hello">
        <span>123456</span>
      </div>
    )
  }
}

const ele = <Home_ />
// console.log(ele.tag)
console.log(ele.attrs)
// console.log(<Home />)

// console.log(element)

// const ele = 1

// ReactDOM.render(ele, document.querySelector('#root'))

// let element = 'str'
// console.log(element);

ReactDOM.render(<Home_ name={'act'}/>, document.getElementById('root'))

// console.log(ele)