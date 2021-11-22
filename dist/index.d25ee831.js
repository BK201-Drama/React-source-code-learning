"use strict";
// import React from './react/index'
const React = {
    createElement
};
function createElement(tag, attrs, ...childrens) {
    return {
        tag,
        attrs,
        childrens
    };
} // import ReactDOM from './react-dom/index'
const ele = React.createElement("div", {
    className: "attrs"
}, "123"); // const ele = 1
// ReactDOM.render(ele, document.querySelector('#root'))
console.log(ele);

//# sourceMappingURL=index.d25ee831.js.map
