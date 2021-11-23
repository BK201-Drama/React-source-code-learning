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

class Home_ {
  render () {
    return (
      <div className="hello">
        <span>123</span>
      </div>
    )
  }
}

console.log(<Home_/>)
console.log(<Home />)

// console.log(element)

// const ele = 1

// ReactDOM.render(ele, document.querySelector('#root'))

// let element = 'str'
// console.log(element);

ReactDOM.render(<Home name={'act'}/>, document.getElementById('root'))

// console.log(ele)