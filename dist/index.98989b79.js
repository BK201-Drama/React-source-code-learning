var e={};Object.defineProperty(e,"__esModule",{value:!0});var t={};Object.defineProperty(t,"__esModule",{value:!0});var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.createComponent=i,n.renderComponent=u,n.setComponentProps=d,n.setAttribute=p;var o,r=(o=t)&&o.__esModule?o:{default:o},s={};function l(e,t){let o=e;return null!=t&&"boolean"!=typeof t||(t=""),"number"==typeof t&&(t=String(t)),"string"==typeof t?(e&&3===e.nodeType?e.textContent!==t&&(e.textContent=t):(o=document.createTextNode(t),e&&e.parentNode&&e.parentNode.replaceNode(o,e)),o):("function"==typeof t.tag&&function(e,t){let o=e;o&&o.constructor===t.tag?((0,n.setComponentProps)(o,t.attrs),e=o.base):(o&&(!function(e){a(e.base)}(o),o=null),o=(0,n.createComponent)(t.tag,t.attrs),(0,n.setComponentProps)(o,t.attrs),e=o.base)}(o,t),e||(o=document.createElement(t.tag)),(t.childrens&&t.childrens.length>0||o.childNodes&&o.childNodes.length>0)&&function(e,t){const n=e.childNodes,o=[],r={};n.length>0&&[...n].forEach((e=>{const t=e.key;t?r[t]=e:o.push(e)}));if(t&&t.length>0){let s=0,c=o.length;[...t].forEach(((t,i)=>{const u=t.key;let d;if(u)r[u]&&(d=r[u],r[u]=void 0);else if(c>s)for(let e=s;e<c;e++){let t=o[e];if(t){d=t,o[e]=void 0,e===c-1&&c--,e===s&&s++;break}}d=l(d,t);const f=n[i];d&&d!==e&&d!==f&&(f?d===f.nextSibling?a(f):e.insertBefore(d,f):e.appendChild(d))}))}}(o,t.childrens),function(e,t){const o={},r=t.attrs,s=e.attributes;console.log(s),[...s].forEach((e=>{o[e.name]=e.value})),console.log(o);for(let t in o)t in r||(0,n.setAttribute)(e,t,void 0);for(let t in r)o[t]!==r[t]&&(0,n.setAttribute)(e,t,r[t])}(o,t),o)}function a(e){e&&e.parentNode&&e.parentNode.removeNode(e)}Object.defineProperty(s,"__esModule",{value:!0}),s.diff=function(e,t,n){let o=l(e,t);n&&n.appendChild(o);return o},s.diffNode=l;const c={render:f};function i(e,t){let n;return e.prototype&&e.prototype.render?n=new e(t):(n=new r.default(t),n.constructor=e,n.render=function(){return this.constructor(t)}),n}function u(e){let t;const n=e.render();e.base&&componentWillUpdate&&e.componentWillUpdate(),t=function(e){null!=e&&"boolean"!=typeof e||(e="");"number"==typeof e&&(e=String(e));if("string"==typeof e)return document.createTextNode(e);if("function"==typeof e.tag){const t=i(e.tag,e.attrs);return d(t,e.attrs),t.base}const{tag:t,attrs:n,childrens:o}=e,r=document.createElement(t);n&&Object.keys(n).forEach((e=>{const t=n[e];p(r,e,t)}));if(o?.length>0)for(let e of o)f(e,r);return r}(n),t=(0,s.diffNode)(e.base,n),e.base=t,e.base?e.componentDidUpdate&&e.componentDidUpdate():e.componentDidMount&&e.componentDidMount(),e.base&&e.base.parentNode&&e.base.parentNode.replaceChild(t,e.base)}function d(e,t){e.base||(e.componentWillMount&&e.componentWillMount(),e.componentWillReceiveProps&&e.componentWillReceiveProps(t)),e.props=t,u(e)}function f(e,t,n){return(0,s.diff)(n,e,t)}function p(e,t,n){if("className"===t&&(t="class"),/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}n.default=c;t.default=class{constructor(e={}){this.props=e,this.state={}}setState(e){Object.assign(this.state,e),(0,n.renderComponent)(this)}};var m=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default={createElement:function(e,t,...n){return{tag:e,attrs:t=t||{},childrens:n,key:t.key||null}},Component:m.default};var b=y(e),h=y(n);function y(e){return e&&e.__esModule?e:{default:e}}class g extends b.default.Component{constructor(e){super(e),this.state={num:0}}click=()=>{this.setState({num:this.state.num+1})};render(){return b.default.createElement("div",{className:"hello"},b.default.createElement("span",null,"123456--",this.state.num),b.default.createElement("button",{onClick:this.click.bind(this)},"+"))}}h.default.render(b.default.createElement(g,{name:"act"}),document.getElementById("root"));
//# sourceMappingURL=index.98989b79.js.map