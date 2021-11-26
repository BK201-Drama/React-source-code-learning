// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2F9UW":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BQdY":[function(require,module,exports) {
"use strict";
var _index = require("./react/index");
var _index2 = _interopRequireDefault(_index);
var _index3 = require("./react-dom/index");
var _index4 = _interopRequireDefault(_index3);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// const ele = (
//   <div className="attrs">
//     123
//     <span>456</span>
//   </div>
// )
// function Home_ () {
//   return (
//     <div className="hello">
//       <span>123</span>
//     </div>
//   )
// }
class Homes extends _index2.default.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        };
    }
    // componentWillMount () {
    //   console.log("组件开始加载")
    // }
    // componentWillReceiveProps (props) {
    //   console.log('props-加载', props)
    // }
    // componentWillUpdate () {
    //   console.log("组件将要更新")
    // }
    // componentDidUpdate () {
    //   console.log("组件已经更新")
    // }
    // componentDidMount () {
    //   console.log("组件加载完成")
    // }
    click = ()=>{
        this.setState({
            num: this.state.num + 1
        });
    };
    render() {
        return _index2.default.createElement("div", {
            className: "rng"
        }, _index2.default.createElement("span", {
            "class": "fuck"
        }, "123456--", this.state.num), _index2.default.createElement("button", {
            onClick: this.click.bind(this),
            "class": "U"
        }, "+"));
    }
} // const ele = <Home_ name={"123123"}/>
// console.log(ele.tag)
// console.log(ele.tag)
var ele = _index2.default.createElement(Homes, null);
console.log(ele.tag); // console.log(element)
// const ele = 1
// ReactDOM.render(ele, document.querySelector('#root'))
// let element = 'str'
// console.log(element);
_index4.default.render(_index2.default.createElement(Homes, {
    name: 'act'
}), document.getElementById('root')); // console.log(ele)

},{"./react/index":"77wkh","./react-dom/index":"egPJa"}],"77wkh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _component = require("./component");
var _component2 = _interopRequireDefault(_component);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(tag, attrs, ...childrens) {
    attrs = attrs || {
    };
    return {
        tag,
        attrs,
        childrens,
        key: attrs.key || null
    };
}
exports.default = {
    createElement,
    Component: _component2.default
};

},{"./component":"5T8KR"}],"5T8KR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _index = require("../react-dom/index");
class Component {
    constructor(props = {
    }){
        this.props = props;
        this.state = {
        };
    }
    setState(stateChange) {
        // 浅拷贝，将stateChange浅拷贝给this.state
        Object.assign(this.state, stateChange); // 数据改变实时渲染
        (0, _index.renderComponent)(this);
    }
}
exports.default = Component;

},{"../react-dom/index":"egPJa"}],"egPJa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createComponent = createComponent;
exports.renderComponent = renderComponent;
exports.setComponentProps = setComponentProps;
exports.setAttribute = setAttribute;
var _component = require("../react/component");
var _component2 = _interopRequireDefault(_component);
var _diff = require("./diff");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ReactDOM = {
    render
}; // 创建自定义组件
// vnode.tag, vnode.attrs
function createComponent(comp, props) {
    let inst; // 原型链非空，还有render方法，那么一定是类组件
    if (comp.prototype && comp.prototype.render) // console.log("props", props)
    inst = new comp(props); // console.log("inst" ,inst)
    else {
        // 如果不是类组件，我们就也是用类组件创建
        inst = new _component2.default(props); // 将构造函数赋值，函数组件原来的tag就是函数本身，因此用于构造函数十分切合
        inst.constructor = comp; // 每一个类组件都有一个render方法，对该render进行赋值给其他函数，并且是返回一个构造函数内部的jsx
        inst.render = function() {
            return this.constructor(props);
        };
    }
    return inst;
} // 这是为了给comp内部添加base对象而设置的函数
// 组件更新可以设置生命周期
function renderComponent(comp) {
    // 定义组件内部的节点对象
    let base; // 拿到了元素
    const renderer = comp.render(); // console.log(renderer)
    if (comp.base && componentWillUpdate) comp.componentWillUpdate();
     // renderer是获取了类组件内部的元素，但还是需要一层_render()函数解析，不然还是无法解析
    // base = _render(renderer)
    console.log("comp-", comp);
    console.log("renderer", renderer);
    base = (0, _diff.diffNode)(comp.base, renderer);
    comp.base = base;
    console.log('base', base);
    if (comp.base) {
        if (comp.componentDidUpdate) comp.componentDidUpdate();
    } else if (comp.componentDidMount) comp.componentDidMount();
     // if (comp.base && comp.base.parentNode) {
//   // replaceChild是只能用于子组件，因此我们必须使用parentNode
//   // 将base赋值给comp.base
//   comp.base.parentNode.replaceChild(base, comp.base)
// }
}
function setComponentProps(comp, props) {
    if (!comp.base) {
        if (comp.componentWillMount) comp.componentWillMount();
        if (comp.componentWillReceiveProps) comp.componentWillReceiveProps(props);
    } // 设置组件的属性
    comp.props = props; // 渲染组件
    renderComponent(comp);
}
function _render(vnode) {
    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
    if (typeof vnode === 'number') vnode = String(vnode);
    if (typeof vnode === 'string') return document.createTextNode(vnode);
     // 判断是否为函数组件或类组件【根据tag，也就是当前组件来分析】
    // 必须在render下才能将attrs变成props
    if (typeof vnode.tag === 'function') {
        // 1.创建组件
        const comp = createComponent(vnode.tag, vnode.attrs); // 2.设置组件的属性，在这里，所有的属性都在这里变成了props
        setComponentProps(comp, vnode.attrs); // 3.组件渲染的节点对象返回
        return comp.base;
    }
    const { tag , attrs , childrens  } = vnode;
    const dom = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach((key)=>{
        const value = attrs[key];
        setAttribute(dom, key, value);
    });
    if (childrens?.length > 0) for (let item of childrens)render(item, dom);
    return dom;
}
function render(vnode, container, dom) {
    return (0, _diff.diff)(dom, vnode, container); // return container.appendChild(_render(vnode))
} // 设置属性【value为key对应的键值】
function setAttribute(dom, key, value) {
    // 将属性名的className转换成class
    if (key === 'className') key = 'class';
     // 转换事件
    if (/on\w+/.test(key)) {
        key = key.toLowerCase();
        dom[key] = value || '';
    } else if (key === 'style') {
        if (!value || typeof value === 'string') dom.style.cssText = value || '';
        else if (value && typeof value === 'object') {
            for(let k in value)if (typeof value[k] === 'number') dom.style[k] = value[k] + 'px';
            else dom.style[k] = value[k];
        }
    } else {
        if (key in dom) dom[key] = value || '';
        if (value) dom.setAttribute(key, value);
        else dom.removeAttribute(key);
    }
}
exports.default = ReactDOM;

},{"../react/component":"5T8KR","./diff":"2vYBU"}],"2vYBU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diff = diff;
exports.diffNode = diffNode;
var _index = require("./index");
function diff(dom, vnode, container) {
    // 对比节点的变化
    let ret = diffNode(dom, vnode);
    if (container) container.appendChild(ret);
    return ret;
}
function diffNode(dom, vnode) {
    let out = dom;
    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
    if (typeof vnode === 'number') vnode = String(vnode);
    if (typeof vnode === 'string') {
        if (dom && dom.nodeType === 3) {
            if (dom.textContent !== vnode) dom.textContent = vnode;
        } else {
            out = document.createTextNode(vnode);
            if (dom && dom.parentNode) dom.parentNode.replaceNode(out, dom);
        }
        return out;
    }
    if (typeof vnode.tag === 'function') out = diffComponent(dom, vnode);
     // 非文本dom节点
    if (!dom) out = document.createElement(vnode.tag);
     // 比较子节点
    if (vnode.childrens && vnode.childrens.length > 0 || out && out.childNodes && out.childNodes.length > 0) diffChildren(out, vnode.childrens);
    diffAttribute(out, vnode);
    return out;
}
function diffComponent(dom, vnode) {
    let comp = dom; // 如果组件没有变化，只需要重新设置props即可
    if (comp && comp.constructor === vnode.tag) {
        // 重新设置props
        (0, _index.setComponentProps)(comp, vnode.attrs); // 赋值
        dom = comp.base;
    } else {
        // 组件类型发生变化
        if (comp) {
            // 移除旧的组件
            unmountComponent(comp); // 释放
            comp = null;
        } // 创建新组件
        comp = (0, _index.createComponent)(vnode.tag, vnode.attrs);
        console.log("diffComponent1", comp); // 设置组件属性
        (0, _index.setComponentProps)(comp, vnode.attrs); // 给当前挂载base
        dom = comp.base;
    }
    return dom;
}
function unmountComponent(comp) {
    removeNode(comp.base);
}
function removeNode(dom) {
    if (dom && dom.parentNode) dom.parentNode.removeNode(dom);
}
function diffChildren(dom, vchildren) {
    const domChildren = dom.childNodes;
    const children = [];
    const keyed = {
    }; // 将有key的节点和没有key的节点分开
    if (domChildren.length > 0) [
        ...domChildren
    ].forEach((item)=>{
        const key = item.key;
        if (key) keyed[key] = item;
        else children.push(item);
    });
    if (vchildren && vchildren.length > 0) {
        let min = 0;
        let childrenLen = children.length;
        [
            ...vchildren
        ].forEach((vchild, i)=>{
            const key = vchild.key;
            let child;
            if (key) // 如果有key，找到对应key的节点
            {
                if (keyed[key]) {
                    child = keyed[key];
                    keyed[key] = undefined;
                }
            } else if (childrenLen > min) for(let j = min; j < childrenLen; j++){
                let c = children[j];
                if (c) {
                    child = c;
                    children[j] = undefined;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
             // 对比
            child = diffNode(child, vchild); // 更新dom
            const f = domChildren[i];
            if (child && child !== dom && child !== f) {
                if (!f) dom.appendChild(child);
                else if (child === f.nextSibling) removeNode(f);
                else dom.insertBefore(child, f);
            }
        });
    }
}
function diffAttribute(dom, vnode) {
    // 保存之前的dom所有的属性
    const oldAttrs = {
    };
    const newAttrs = vnode.attrs; // dom是原有的节点对象，vnode是虚拟dom
    // 取出dom的属性
    const domAttrs = dom.attributes // console.log(domAttrs);
    ;
    [
        ...domAttrs
    ].forEach((item)=>{
        oldAttrs[item.name] = item.value;
    }); // console.log(oldAttrs)
    // 比较
    // 如果原来的属性跟新属性对比不在新属性中，则将其移除【属性值undefined就行】
    for(let key in oldAttrs)if (!(key in newAttrs)) (0, _index.setAttribute)(dom, key, undefined);
     // 如果旧的属性和新属性不同，就改变旧的
    for(let key1 in newAttrs)if (oldAttrs[key1] !== newAttrs[key1]) (0, _index.setAttribute)(dom, key1, newAttrs[key1]);
}

},{"./index":"egPJa"}]},["2F9UW","7BQdY"], "7BQdY", "parcelRequire94c2")

//# sourceMappingURL=index.38661719.js.map
