var e={};Object.defineProperty(e,"__esModule",{value:!0});var t={};Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e={}){this.props=e,this.state={}}};var o,n=(o=t)&&o.__esModule?o:{default:o};e.default={createElement:function(e,t,...o){return{tag:e,attrs:t,childrens:o}},Component:n.default};var l=p(e),r={};Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){return e&&e.__esModule?e:{default:e}}(t);const c={render:i};function a(e,t){e.base||(e.componentWillMount?e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps()),e.props=t,function(e){let t;const o=e.render();console.log(o),t=u(o),e.base?(e.componentWillUpdate&&e.componentWillUpdate(),e.componentDidUpdate&&e.componentDidUpdate()):e.componentDidMount&&e.componentDidMount(),e.base=t}(e)}function u(e){if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e)return document.createTextNode(e);if("function"==typeof e.tag){const t=function(e,t){let o;return e.prototype&&e.prototype.render?(console.log("props",t),o=new e(t),console.log("inst",o)):(o=new s.default(t),o.constructor=e,o.render=function(){return this.constructor(t)}),o}(e.tag,e.attrs);return a(t,e.attrs),t.base}const{tag:t,attrs:o,childrens:n}=e,l=document.createElement(t);if(o&&Object.keys(o).forEach((e=>{const t=o[e];!function(e,t,o){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=o||"";else if("style"===t)if(o&&"string"!=typeof o){if(o&&"object"==typeof o)for(let t in o)"number"==typeof o[t]?e.style[t]=o[t]+"px":e.style[t]=o[t]}else e.style.cssText=o||"";else t in e&&(e[t]=o||""),o?e.setAttribute(t,o):e.removeAttribute(t)}(l,e,t)})),n?.length>0)for(let e of n)i(e,l);return l}function i(e,t){return t.appendChild(u(e))}r.default=c;p(r);function p(e){return e&&e.__esModule?e:{default:e}}l.default.createElement("div",{className:"attrs"},"123",l.default.createElement("span",null,"456"));class d extends l.default.Component{constructor(e){super(e)}componentWillMount(){console.log("组件开始加载")}componentWillReceiveProps(e){console.log("props")}componentWillUpdate(){console.log("组件将要更新")}componentDidUpdate(){console.log("组件已经更新")}componentDidMount(){console.log("组件加载完成")}render(){return l.default.createElement("div",{className:"hello"},l.default.createElement("span",null,"123456"))}}const f=l.default.createElement(d,{name:"123123"});console.log(f.tag);
//# sourceMappingURL=index.75920485.js.map