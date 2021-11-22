import React from './react/index'
import ReactDOM from './react-dom/index'

const element = (
  <div className="attrs">
    123
    <span>456</span>
  </div>
)

console.log(element)

// const ele = 1

// ReactDOM.render(ele, document.querySelector('#root'))

// let element = 'str'
// console.log(element);

ReactDOM.render(element, document.getElementById('root'))

// console.log(ele)