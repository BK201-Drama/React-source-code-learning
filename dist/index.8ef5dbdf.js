var e={};Object.defineProperty(e,"__esModule",{value:!0});var t={};Object.defineProperty(t,"__esModule",{value:!0});var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.renderComponent=s;var o,l=(o=t)&&o.__esModule?o:{default:o};const r={render:c};function s(e){let t;t=a(e.render()),e.base?(e.componentWillUpdate&&e.componentWillUpdate(),e.componentDidUpdate&&e.componentDidUpdate()):e.componentDidMount&&e.componentDidMount(),e.base&&e.base.parentNode&&e.base.parentNode.replaceChild(t,e.base),e.base=t}function a(e){if(null!=e&&"boolean"!=typeof e||(e=""),"number"==typeof e&&(e=String(e)),"string"==typeof e)return document.createTextNode(e);if("function"==typeof e.tag){const t=function(e,t){let n;return e.prototype&&e.prototype.render?(console.log("props",t),n=new e(t),console.log("inst",n)):(n=new l.default(t),n.constructor=e,n.render=function(){return this.constructor(t)}),n}(e.tag,e.attrs);return function(e,t){e.base||(e.componentWillMount?e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t)),e.props=t,s(e)}(t,e.attrs),t.base}const{tag:t,attrs:n,childrens:o}=e,r=document.createElement(t);if(n&&Object.keys(n).forEach((e=>{const t=n[e];!function(e,t,n){"className"===t&&(t="class");if(/on\w+/.test(t))e[t=t.toLowerCase()]=n||"";else if("style"===t)if(n&&"string"!=typeof n){if(n&&"object"==typeof n)for(let t in n)"number"==typeof n[t]?e.style[t]=n[t]+"px":e.style[t]=n[t]}else e.style.cssText=n||"";else t in e&&(e[t]=n||""),n?e.setAttribute(t,n):e.removeAttribute(t)}(r,e,t)})),o?.length>0)for(let e of o)c(e,r);return r}function c(e,t){return t.appendChild(a(e))}n.default=r;t.default=class{constructor(e={}){this.props=e,this.state={}}setState(e){Object.assign(this.state,e),(0,n.renderComponent)(this)}};var u=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default={createElement:function(e,t,...n){return{tag:e,attrs:t,childrens:n}},Component:u.default};var i=p(e),d=p(n);function p(e){return e&&e.__esModule?e:{default:e}}i.default.createElement("div",{className:"attrs"},"123",i.default.createElement("span",null,"456"));class f extends i.default.Component{constructor(e){super(e),this.state={num:0}}componentWillMount(){console.log("组件开始加载")}componentWillReceiveProps(e){console.log("props-加载"),console.log(e)}componentWillUpdate(){console.log("组件将要更新")}componentDidUpdate(){console.log("组件已经更新")}componentDidMount(){console.log("组件加载完成")}click=()=>{this.setState({num:this.state.num+1})};render(){return i.default.createElement("div",{className:"hello"},i.default.createElement("span",null,"123456--",this.state.num),i.default.createElement("button",{onClick:this.click.bind(this)},"+"))}}d.default.render(i.default.createElement(f,{name:"act"}),document.getElementById("root"));
//# sourceMappingURL=index.8ef5dbdf.js.map