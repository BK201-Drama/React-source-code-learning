var e={};Object.defineProperty(e,"__esModule",{value:!0});let t={createElement:function(e,t,...n){return{tag:e,attrs:t,childrens:n}}};e.default=t;var n=a(e),r={};Object.defineProperty(r,"__esModule",{value:!0});const l={render:(e,t)=>(t.innerHTML="",o(e,t))};function o(e,t){if(void 0===e)return;if("string"==typeof e){const n=document.createTextNode(e);return t.appendChild(n)}const{tag:n,attrs:r,childrens:l}=e,s=document.createElement(n);if(r&&Object.keys(r).forEach((e=>{const t=r[e];!function(e,t,n){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}(s,e,t)})),l?.length>0)for(let e of l)o(e,s);return t.appendChild(s)}r.default=l;var s=a(r);function a(e){return e&&e.__esModule?e:{default:e}}const c=n.default.createElement("div",{className:"attrs"},"123",n.default.createElement("span",null,"456"));console.log(c),s.default.render(c,document.getElementById("root"));
//# sourceMappingURL=index.d15b2299.js.map