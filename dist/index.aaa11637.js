var e={};Object.defineProperty(e,"__esModule",{value:!0});let t={createElement:function(e,t,...n){return{tag:e,attrs:t,childrens:n}}};e.default=t;var n=d(e),r={};Object.defineProperty(r,"__esModule",{value:!0});var l={};Object.defineProperty(l,"__esModule",{value:!0});l.default=class{constructor(e={}){this.props=e,this.state={}}};var o,s=(o=l)&&o.__esModule?o:{default:o};const a={render:c};function u(e){if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e)return document.createTextNode(e);if("function"==typeof e.tag){console.log("函数组件");const t=function(e,t){let n;return e.prototype&&e.prototype.render?n=new e(t):(n=new s.default(t),n.constructor=e,n.render=function(){return this.constructor(t)}),n}(e.tag,e.attrs);console.log(t)}const{tag:t,attrs:n,childrens:r}=e,l=document.createElement(t);if(n&&Object.keys(n).forEach((e=>{const t=n[e];!function(e,t,n){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}(l,e,t)})),r?.length>0)for(let e of r)c(e,l);return l}function c(e,t){return t.appendChild(u(e))}r.default=a;var f=d(r);function d(e){return e&&e.__esModule?e:{default:e}}n.default.createElement("div",{className:"attrs"},"123",n.default.createElement("span",null,"456"));f.default.render(n.default.createElement((function(){return n.default.createElement("div",{className:"hello"},n.default.createElement("span",null,"123"))}),null),document.getElementById("root"));
//# sourceMappingURL=index.aaa11637.js.map
