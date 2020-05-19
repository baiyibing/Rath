!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="./",e(e.s=8)}([function(t,r,e){t.exports=e(7)},function(t,r,e){"use strict";this&&this.__assign;Object.defineProperty(r,"__esModule",{value:!0});var n=e(3),o=e(6),i=e(2),a={sum:i.sum_unsafe,mean:i.mean,count:i.count};function u(t){var r=t.type,e=t.aggFunc,o=void 0===e?i.count:e,a=t.factTable,u=void 0===a?[]:a,c=t.dimensions,l=void 0===c?[]:c,f=t.measures,s=void 0===f?[]:f;switch(r){case"period":return new n.periodCube({aggFunc:o,factTable:u,dimensions:l,measures:s});case"moment":default:return new n.momentCube({aggFunc:o,factTable:u,dimensions:l,measures:s})}}r.createCube=u,r.default=function(t){var r=t.dimensions,e=t.measures,n=t.asFields,c=t.operator,l=t.dataSource,f=u({type:"moment",aggFunc:a[c]||i.count,dimensions:r,measures:e,factTable:l}),s=o.tree2Table({dimensions:r,measures:e,cube:f});return s.forEach((function(t){n.forEach((function(r,n){t[r]=t[e[n]]}))})),s},function(t){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}(e(2))},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sum_unsafe=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,o){r.forEach((function(r){e[r]+=t[n][r]}))},o=0,i=t.length;o<i;o++)n(o);return e},r.sum=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,o){r.forEach((function(r){e[r]+=Number(t[n][r])||0}))},o=0,i=t.length;o<i;o++)n(o);return e},r.count=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=0,o=t.length;n<o;n++)r.forEach((function(t){e[t]++}));return e},r.mean=function(t,r){var e={};r.forEach((function(t){e[t]=0}));for(var n=function(n,o){r.forEach((function(r){e[r]+=Number(t[n][r])||0}))},o=0,i=t.length;o<i;o++)n(o);return r.forEach((function(r){e[r]/=t.length})),e}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(4);r.periodCube=n.default;var o=e(5);r.momentCube=o.default},function(t,r,e){"use strict";var n=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(n(arguments[r]));return t},i=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(t){this.children=new Map,this._rawData=[],this.aggFunc=t,this.cache=!1}return t.prototype.push=function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];(t=this._rawData).push.apply(t,o(r))},t.prototype.aggData=function(t){return void 0===t&&(t=[]),this.cache||(this._aggData=this.aggFunc(this.rawData,t),this.cache=!0),this._aggData},t.prototype.clearCache=function(){this.cache=!1},Object.defineProperty(t.prototype,"rawData",{get:function(){var t,r;if(!this.cache){if(0!==this.children.size){var e=this.children.values(),n=[];try{for(var o=i(e),a=o.next();!a.done;a=o.next()){var u=a.value,c=void 0,l=u.rawData,f=l.length;for(c=0;c<f;c++)n.push(l[c])}}catch(s){t={error:s}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}this._rawData=n}this.cache=!0}return this._rawData},enumerable:!0,configurable:!0}),t.prototype.getNode=function(t){return function r(e,o){var a,u;if(o===t.length)return e;var c=e.children.entries();try{for(var l=i(c),f=l.next();!f.done;f=l.next()){var s=n(f.value,2),h=s[0],v=s[1];if(h===t[o])return r(v,o+1)}}catch(d){a={error:d}}finally{try{f&&!f.done&&(u=l.return)&&u.call(l)}finally{if(a)throw a.error}}return null}(this,0)},t}(),u=function(){function t(t){this.aggFunc=t.aggFunc,this.factTable=t.factTable,this.dimensions=t.dimensions,this.measures=t.measures}return t.prototype.get=function(t){var r=this.tree,e=(this.aggFunc,this.measures);return function r(o,a){var u,c;if(a===t.length)return o.aggData(e);var l=o.children.entries();try{for(var f=i(l),s=f.next();!s.done;s=f.next()){var h=n(s.value,2),v=h[0],d=h[1];if(v===t[a])return r(d,a+1)}}catch(y){u={error:y}}finally{try{s&&!s.done&&(c=f.return)&&c.call(f)}finally{if(u)throw u.error}}return!1}(r,0)},t.prototype.getNode=function(t){return this.tree.getNode(t)},t.prototype.buildTree=function(){var t,r=new a(this.aggFunc),e=this.factTable.length;for(t=0;t<e;t++)this.insertNode(this.factTable[t],r,0);return this.tree=r,r},t.prototype.insertNode=function(t,r,e){if(r.push(t),r.cache=!1,e<this.dimensions.length){var n=t[this.dimensions[e]];r.children.has(n)||r.children.set(n,new a(this.aggFunc)),this.insertNode(t,r.children.get(n),e+1)}},t.prototype.aggTree=function(t){var r,e;void 0===t&&(t=this.tree);var n=t.children.values();try{for(var o=i(n),a=o.next();!a.done;a=o.next()){var u=a.value;this.aggTree(u)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(r)throw r.error}}return t.aggData(this.measures),t},t.prototype.aggNode=function(t){var r,e;void 0===t&&(t=this.tree);var n=t.children.values();try{for(var o=i(n),a=o.next();!a.done;a=o.next()){var u=a.value;this.aggTree(u)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(r)throw r.error}}return t.aggData(this.measures),t},t}();r.default=u},function(t,r,e){"use strict";var n=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(n(arguments[r]));return t},i=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(){this.children=new Map,this.rawData=[]}return t.prototype.push=function(){for(var t,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];(t=this.rawData).push.apply(t,o(r))},t.prototype.aggData=function(t,r){return void 0===r&&(r=[]),this._aggData=t(this.rawData,r),this._aggData},t.prototype.getNode=function(t){return function r(e,o){var a,u;if(o===t.length)return e;var c=e.children.entries();try{for(var l=i(c),f=l.next();!f.done;f=l.next()){var s=n(f.value,2),h=s[0],v=s[1];if(h===t[o])return r(v,o+1)}}catch(d){a={error:d}}finally{try{f&&!f.done&&(u=l.return)&&u.call(l)}finally{if(a)throw a.error}}return null}(this,0)},t}();r.Node=a;var u=function(){function t(t){this.aggFunc=t.aggFunc,this.factTable=t.factTable,this.dimensions=t.dimensions,this.measures=t.measures,this.buildTree(),this.aggTree()}return t.prototype.get=function(t){var r=this.tree,e=this.aggFunc,o=this.measures;return function r(a,u){var c,l;if(u===t.length)return a.aggData(e,o);var f=a.children.entries();try{for(var s=i(f),h=s.next();!h.done;h=s.next()){var v=n(h.value,2),d=v[0],y=v[1];if(d===t[u])return r(y,u+1)}}catch(p){c={error:p}}finally{try{h&&!h.done&&(l=s.return)&&l.call(s)}finally{if(c)throw c.error}}return!1}(r,0)},t.prototype.getNode=function(t){return this.tree.getNode(t)},t.prototype.setData=function(t){var r=t.aggFunc,e=void 0===r?this.aggFunc:r,n=t.factTable,o=void 0===n?this.factTable:n,i=t.dimensions,a=void 0===i?this.dimensions:i,u=t.measures,c=void 0===u?this.measures:u;a!==this.dimensions||o!==this.factTable?(this.dimensions=a,this.factTable=o,this.measures=c,this.aggFunc=e,this.buildTree(),this.aggTree()):c===this.measures&&e===this.aggFunc||(this.measures=c,this.aggFunc=e,this.aggTree())},t.prototype.buildTree=function(){var t,r=new a,e=this.factTable.length;for(t=0;t<e;t++)this.insertNode(this.factTable[t],r,0);return this.tree=r,r},t.prototype.insertNode=function(t,r,e){if(e===this.dimensions.length)r.push(t);else{var n=t[this.dimensions[e]];r.children.has(n)||r.children.set(n,new a),this.insertNode(t,r.children.get(n),e+1)}},t.prototype.aggTree=function(t){var r,e;if(void 0===t&&(t=this.tree),t.children.size>0){t.rawData=[];var n=t.children.values();try{for(var o=i(n),a=o.next();!a.done;a=o.next()){var u=a.value,c=void 0,l=this.aggTree(u).rawData,f=l.length;for(c=0;c<f;c++)t.rawData.push(l[c])}}catch(s){r={error:s}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(r)throw r.error}}}return t.aggData(this.aggFunc,this.measures),t},t}();r.default=u},function(t,r,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},o=this&&this.__values||function(t){var r="function"===typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(t,r){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(r,"__esModule",{value:!0}),r.tree2Table=function(t){var r=t.dimensions,e=(t.measures,t.cube),a=(e.aggFunc,[]);return function t(e,u,c){var l,f,s;if(0!==e.children.size)try{for(var h=o(e.children.entries()),v=h.next();!v.done;v=h.next()){var d=i(v.value,2),y=d[0];t(d[1],n(n({},u),((s={})[r[c]]=y,s)),c+1)}}catch(g){l={error:g}}finally{try{v&&!v.done&&(f=h.return)&&f.call(h)}finally{if(l)throw l.error}}else{var p=e._aggData;a.push(n(n({},u),p))}}(e.tree,{},0),a}},function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof f?r:f,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=b(a,e);if(u){if(u===l)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var f=c(t,r,e);if("normal"===f.type){if(n=e.done?"completed":"suspendedYield",f.arg===l)continue;return{value:f.arg,done:e.done}}"throw"===f.type&&(n="completed",e.method="throw",e.arg=f.arg)}}}(t,e,a),i}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l={};function f(){}function s(){}function h(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(S([])));y&&y!==r&&e.call(y,o)&&(v=y);var p=h.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t){var r;this._invoke=function(n,o){function i(){return new Promise((function(r,i){!function r(n,o,i,a){var u=c(t[n],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&e.call(f,"__await")?Promise.resolve(f.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,a)}))}a(u.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function w(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return s.prototype=p.constructor=h,h.constructor=s,h[a]=s.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===s||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(p),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o){var i=new m(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(p),p[a]="Generator",p[o]=function(){return this},p.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){"use strict";e.r(r);var n={};e.r(n),e.d(n,"kruskal",(function(){return _})),e.d(n,"kruskalWithFullMST",(function(){return x}));var o={};function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function a(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){i(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}e.r(o),e.d(o,"getFieldType",(function(){return O})),e.d(o,"getAllFieldTypes",(function(){return T})),e.d(o,"getFieldDistribution",(function(){return j})),e.d(o,"getAllFieldsDistribution",(function(){return E})),e.d(o,"getFieldEntropy",(function(){return F})),e.d(o,"getAllFieldsEntropy",(function(){return N})),e.d(o,"groupFields",(function(){return D}));function l(t){return JSON.parse(JSON.stringify(t))}function f(t,r){var e=new Map,n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var l=u.value[r];e.has(l)||e.set(l,0),e.set(l,e.get(l)+1)}}catch(f){o=!0,i=f}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return a(e.entries())}function s(t){for(var r=t.dataSource,e=t.field,n=t.newField,o=void 0===n?"".concat(e,"(con-group)"):n,i=t.groupNumber,u=r.map((function(t){return t[e]})),c=Math.max.apply(Math,a(u)),l=Math.min.apply(Math,a(u)),f=(c-l)/i,s=[],h=0;h<i;h++){var v=l+h*f,d=l+(h+1)*f;s.push([v,d])}s[0][0]=-1/0,s[s.length-1][1]=1/0;for(var y=Math.max(1,Math.log10(Math.abs(l))-Math.log10(f))+1,p=function(t){var n=r[t],i=s.findIndex((function(t){return t[0]<=n[e]&&n[e]<t[1]})),a=s[i];n[o]="undefined"!==typeof a?"".concat(i+1,":[").concat(Number(a[0].toPrecision(y)),", ").concat(Number(a[1].toPrecision(y)),")"):"null"},g=0;g<r.length;g++)p(g);return r}function h(t){var r=t.dataSource,e=t.field,n=t.newField,o=void 0===n?"".concat(e,"(cat-group)"):n,a=t.groupNumber,u=f(r,e);u.sort((function(t,r){return r[1]-t[1]}));var l=u.map((function(t){return t[1]}));a=u.length;for(var s=l.length-2;s>=0;s--)l[s]=l[s+1]+l[s];for(var h=0;h<u.length-2;h++)if(5*u[h][1]>=l[h+1]&&u[h+1][1]/5<l[h+2]){a=h+2;break}if(a===u.length)return r.map((function(t){return c({},t,i({},o,t[e]))}));for(var v=new Set,d=a-1;d<u.length;d++)v.add(u[d][0]);var y=!0,p=!1,g=void 0;try{for(var m,b=r[Symbol.iterator]();!(y=(m=b.next()).done);y=!0){var w=m.value;v.has(w[e])?w[o]="others":w[o]=w[e]}}catch(x){p=!0,g=x}finally{try{y||null==b.return||b.return()}finally{if(p)throw g}}return r}function v(t,r){return f(t,r).every((function(t){return 1===t[1]}))}function d(t){var r=0,e=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;r+=u}}catch(c){n=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}return t.map((function(t){return t/r}))}var y=function(t){var r=0,e=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;r+=u*Math.log2(u)}}catch(c){n=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}return-r};function p(t){for(var r=[],e=0;e<t.length;e++)for(var n=e+1;n<t[e].length;n++)r.push([[e,n],Math.abs(t[e][n])]);return r}function g(t,r){return t[r]===r?r:t[r]=g(t,t[r])}function m(t,r,e){var n=g(t,r),o=g(t,e);t[n]=o,g(t,r),g(t,e)}function b(t,r,e){return t[e]===e?e:(t[e]=b(t,r,t[e]),r[e]=r[t[e]],t[e])}function w(t,r,e,n){var o=b(t,r,e),i=b(t,r,n),a=r[o],u=r[i];t[o]=i,r[o]=r[i]=a+u,b(t,r,e),b(t,r,n)}function x(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=p(t);n.sort((function(t,r){return r[1]-t[1]}));var o=[],i=t.map((function(t,r){return r})),u=a(i),c=!1,l=!0,f=!1,s=void 0;try{for(var h,v=n[Symbol.iterator]();!(l=(h=v.next()).done);l=!0){var d=h.value;g(i,d[0][0])!==g(i,d[0][1])&&(m(i,d[0][0],d[0][1]),o.push([d[0],d[1],c]));for(var y=0;y<i.length;y++)i[y]=g(i,y);var b=new Set(i);if(b.size<=r||d[1]<e?c=!0:u=a(i),1===b.size)break}}catch(w){f=!0,s=w}finally{try{l||null==v.return||v.return()}finally{if(f)throw s}}return{edgesInMST:o,groups:u}}var _=function(t){var r,e=t.matrix,n=t.measures,o=(t.method,t.groupMaxSize),i=void 0===o?4:o,a=t.limitSize,u=void 0!==a&&a,c=t.threshold,l=void 0===c?0:c;r=u?function(t,r){var e=p(t);e.sort((function(t,r){return r[1]-t[1]}));var n=t.map((function(t,r){return r})),o=t.map((function(){return 1})),i=!0,a=!1,u=void 0;try{for(var c,l=e[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var f=c.value;if(b(n,o,f[0][0])!==b(n,o,f[0][1])){if(o[f[0][0]]+o[f[0][1]]>r)continue;w(n,o,f[0][0],f[0][1])}for(var s=0;s<n.length;s++)n[s]=b(n,o,s);if(1===new Set(n).size)break}}catch(d){a=!0,u=d}finally{try{i||null==l.return||l.return()}finally{if(a)throw u}}for(var h=new Map,v=0;v<n.length;v++)h.has(n[v])||h.set(n[v],[]),h.get(n[v]).push(v);return h}(e,i):function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=p(t);n.sort((function(t,r){return r[1]-t[1]}));var o=t.map((function(t,r){return r})),i=!0,a=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var f=c.value;g(o,f[0][0])!==g(o,f[0][1])&&m(o,f[0][0],f[0][1]);for(var s=0;s<o.length;s++)o[s]=g(o,s);var h=new Set(o);if(h.size<=r||f[1]<e)break}}catch(y){a=!0,u=y}finally{try{i||null==l.return||l.return()}finally{if(a)throw u}}for(var v=new Map,d=0;d<o.length;d++)v.has(o[d])||v.set(o[d],[]),v.get(o[d]).push(d);return v}(e,i,l);var f=[],s=!0,h=!1,v=void 0;try{for(var d,y=r.values()[Symbol.iterator]();!(s=(d=y.next()).done);s=!0){var x=d.value;f.push(x.map((function(t){return n[t]})))}}catch(_){h=!0,v=_}finally{try{s||null==y.return||y.return()}finally{if(h)throw v}}return f};e(1);e(0);var S;!function(t){t.outlier="default_outlier",t.cluster="default_group",t.trend="default_trend"}(S||(S={}));function O(t,r){return function(t,r){return t.every((function(t){return Number(t[r])>=1800&&Number(t[r])<=2200||(!isNaN(Date.parse(t[r]))&&"string"===typeof t[r]&&/^[0-9]{0,4}[-/][0-9]{0,2}([-/][0-9]{0,2}$)?/.test(t[r])||"undefined"===typeof t[r]||null===t[r])}))}(t,r)?"temporal":function(t,r){return t.every((function(t){return"number"===typeof t[r]||"undefined"===typeof t[r]||null===t[r]}))}(t,r)?"quantitative":(function(t,r){t.every((function(t){return"string"===typeof t[r]||"undefined"===typeof t[r]||null===t[r]}))}(t,r),"nominal")}function T(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value;e.push({name:c,type:O(t,c)})}}catch(l){o=!0,i=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}function j(t,r){return f(t,r).map((function(t){return{memberName:t[0],count:t[1]}}))}function E(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value;e.push({fieldName:c,distribution:j(t,c)})}}catch(l){o=!0,i=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}function F(t,r){var e=f(t,r),n=d(e.map((function(t){return t[1]})));return{fieldName:r,entropy:y(n),maxEntropy:Math.log2(e.length)}}function N(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value;e.push(F(t,c))}}catch(l){o=!0,i=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}function D(t,r){var e=l(t),n=[],o=!0,i=!1,a=void 0;try{for(var u,c=r[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value,y="".concat(d.name,"(group)");"quantitative"===d.type&&f(t,d.name).length>50?v(t,d.name)||(e=s({dataSource:e,field:d.name,newField:y,groupNumber:8}),n.push({name:y,type:"ordinal"})):("ordinal"===d.type||"nominal"===d.type)&&f(t,d.name).length>25&&(v(t,d.name)||(e=h({dataSource:e,field:d.name,newField:y,groupNumber:8}),n.push({name:y,type:d.type})))}}catch(p){i=!0,a=p}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}return{groupedData:e,fields:r,newFields:n}}var P;self.addEventListener("message",(P=t=>{try{const{dataSource:r,fields:e}=t.data,n=o.groupFields(r,e);self.postMessage({success:!0,data:n})}catch(r){self.postMessage({success:!1,message:r.toString()})}},function(t){var r=(new Date).getTime();try{P(t)}finally{var e=(new Date).getTime()-r;console.log("Task [".concat(P.name,"] cost ").concat(e," ms."))}}),!1)}]);
//# sourceMappingURL=a052c681f648b70eb30e.worker.js.map