var e={};Object.defineProperty(e,"__esModule",{value:!0});let t={createElement:function(e,t,...n){return{tag:e,attrs:t,childrens:n}}};e.default=t;var n=s(e),r={};Object.defineProperty(r,"__esModule",{value:!0});const l={render:function e(t,n){if(void 0===t)return;if("string"==typeof t){const e=document.createTextNode(t);return n.appendChild(e)}const{tag:r,attrs:l,childrens:o}=t,s=document.createElement(r);l&&Object.keys(l).forEach((e=>{const t=l[e];!function(e,t,n){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}(s,e,t)}));if(o?.length>0)for(let t of o)e(t,s);return n.appendChild(s)}};r.default=l;var o=s(r);function s(e){return e&&e.__esModule?e:{default:e}}const a=n.default.createElement("div",{className:"attrs"},"123",n.default.createElement("span",null,"456"));console.log(a),o.default.render(a,document.getElementById("root"));
//# sourceMappingURL=index.b78066bb.js.map
