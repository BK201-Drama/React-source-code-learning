var e={};Object.defineProperty(e,"__esModule",{value:!0});var t={};Object.defineProperty(t,"__esModule",{value:!0});var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.createComponent=a,n.renderComponent=u,n.setComponentProps=d,n.setAttribute=p;var o,r=(o=t)&&o.__esModule?o:{default:o},s={};function l(e,t){let o=e;return null!=t&&"boolean"!=typeof t||(t="-"),"number"==typeof t&&(t=String(t)),"string"==typeof t?(e&&3===e.nodeType?e.textContent!==t&&(e.textContent=t):(o=document.createTextNode(t),e&&e.parentNode&&e.parentNode.replaceNode(o,e)),o):("function"==typeof t.tag&&(e=function(e,t){let o=e;o&&o.constructor===t.tag?((0,n.setComponentProps)(o,t.attrs),e=o.base):(o&&(!function(e){c(e.base)}(o),o=null),o=(0,n.createComponent)(t.tag,t.attrs),(0,n.setComponentProps)(o,t.attrs),e=o.base);return e}(o,t)),e||(o=document.createElement(t.tag)),(t.childrens&&t.childrens.length>0||o&&o?.childNodes&&o?.childNodes.length>0)&&function(e,t){const n=e.childNodes,o=[],r={};n.length>0&&[...n].forEach((e=>{const t=e.key;t?r[t]=e:o.push(e)}));if(t&&t.length>0){let s=0,i=o.length;[...t].forEach(((t,a)=>{const u=t.key;let d;if(u)r[u]&&(d=r[u],r[u]=void 0);else if(i>s)for(let e=s;e<i;e++){let t=o[e];if(t){d=t,o[e]=void 0,e===i-1&&i--,e===s&&s++;break}}d=l(d,t);const f=n[a];d&&d!==e&&d!==f&&(f?d===f.nextSibling?c(f):e.insertBefore(d,f):e.appendChild(d))}))}}(o,t.childrens),function(e,t){const o={},r=t.attrs;[...e.attrs].forEach((e=>{o[e.name]=e.value}));for(let t in o)t in r||(0,n.setAttribute)(e,t,void 0);for(let t in r)o[t]!==r[t]&&(0,n.setAttribute)(e,t,r[t])}(o,t),o)}function c(e){e&&e.parentNode&&e.parentNode.removeNode(e)}Object.defineProperty(s,"__esModule",{value:!0}),s.diff=function(e,t,n){let o=l(e,t);n&&n.appendChild(o);return o},s.diffNode=l;const i={render:f};function a(e,t){let n;return e.prototype&&e.prototype.render?n=new e(t):(n=new r.default(t),n.constructor=e,n.render=function(){return this.constructor(t)}),n}function u(e){let t;const n=e.render();e.base&&componentWillUpdate&&e.componentWillUpdate(),console.log("comp",e),console.log("renderer",n),t=(0,s.diffNode)(e.childNodes,n),e.base?e.componentDidUpdate&&e.componentDidUpdate():e.componentDidMount&&e.componentDidMount(),e.base=t}function d(e,t){e.base||(e.componentWillMount&&e.componentWillMount(),e.componentWillReceiveProps&&e.componentWillReceiveProps(t)),e.props=t,u(e)}function f(e,t,n){return(0,s.diff)(n,e,t)}function p(e,t,n){if("className"===t&&(t="class"),/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}n.default=i;t.default=class{constructor(e={}){this.props=e,this.state={}}setState(e){Object.assign(this.state,e),(0,n.renderComponent)(this)}};var m=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default={createElement:function(e,t,...n){return{tag:e,attrs:t=t||{},childrens:n,key:t.key||null}},Component:m.default};var h=y(e),b=y(n);function y(e){return e&&e.__esModule?e:{default:e}}class g extends h.default.Component{constructor(e){super(e),this.state={num:0}}click=()=>{this.setState({num:this.state.num+1})};render(){return h.default.createElement("div",{className:"rng"},h.default.createElement("span",{class:"fuck"},"123456--",this.state.num),h.default.createElement("button",{onClick:this.click.bind(this),class:"U"},"+"))}}b.default.render(h.default.createElement(g,{name:"act"}),document.getElementById("root"));
//# sourceMappingURL=index.5b9e1775.js.map
