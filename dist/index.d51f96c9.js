var e={};Object.defineProperty(e,"__esModule",{value:!0});let t={createElement:function(e,t,...n){return{tag:e,attrs:t,childrens:n}}};e.default=t;var n=i(e),r={};Object.defineProperty(r,"__esModule",{value:!0});var o={};Object.defineProperty(o,"__esModule",{value:!0});o.default=class{constructor(e={}){this.props=e,this.state={}}};var l,s=(l=o)&&l.__esModule?l:{default:l};const a={render:f};function u(e,t){e.props=t,function(e){let t;const n=e.render();console.log(n),t=c(n),console.log(t)}(e)}function c(e){if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e)return document.createTextNode(e);if("function"==typeof e.tag){console.log("函数组件");const t=function(e,t){let n;return e.prototype&&e.prototype.render?n=new e(t):(n=new s.default(t),n.constructor=e,n.render=function(){return this.constructor(t)}),n}(e.tag,e.attrs);return u(t,e.attrs),t.base}const{tag:t,attrs:n,childrens:r}=e,o=document.createElement(t);if(n&&Object.keys(n).forEach((e=>{const t=n[e];!function(e,t,n){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}(o,e,t)})),r?.length>0)for(let e of r)f(e,o);return o}function f(e,t){return t.appendChild(c(e))}r.default=a;var d=i(r);function i(e){return e&&e.__esModule?e:{default:e}}n.default.createElement("div",{className:"attrs"},"123",n.default.createElement("span",null,"456"));d.default.render(n.default.createElement((function(){return n.default.createElement("div",{className:"hello"},n.default.createElement("span",null,"123"))}),null),document.getElementById("root"));
//# sourceMappingURL=index.d51f96c9.js.map
