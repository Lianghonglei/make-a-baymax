parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n='/*送你一只大白，他会说:balalala*/\n#baymax{\n    position: absolute;\n    left: 75%;\n    top: 20%;\n}\n\n#baymax .head{\n    position: relative;\n    z-index: 10;\n    transform:translateZ(50px);\n    width: 90px;\n    height: 60px;\n    border-radius: 50%;\n    margin: auto;\n    background: white;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n#baymax .eye{\n    position: absolute;\n    margin-top: -4px;\n    top: 40%;\n    left: 50%;\n    width: 8px;\n    height: 9px;\n    border-radius: 50%;\n    background: #202b36;\n    animation: blink 5s ease-in-out infinite\n}\n@keyframes blink{\n  0%{\n    transform: scale( 1 , 1 )\n  }\n  49%{\n    transform: scale( 1 , 1 )\n  }\n  50%{\n    transform: scale( 1 , 0.1 )\n  }\n  51%{\n    transform: scale( 1 , 1 )\n  }\n  60%{\n    transform: scale( 1 , 1 )\n  }\n  61%{\n    transform: scale( 1 , 0.1 )\n  }\n  62%{\n    transform: scale( 1 , 1 )\n  }\n  100%{\n    transform: scale( 1 , 1 )\n  }\n}\n\n#baymax .left{\n    margin-left: -27px;\n}\n#baymax .right{\n    margin-left: 19px;\n}\n#baymax .mouth{\n    position: absolute;\n    width: 38px;\n    height: 1px;\n    background: #202b36;\n    top: 40%;\n    left: 50%;\n    margin-left: -19px;\n}\n\n.body{\n    position: relative;\n}\n.body .chest{\n    position: absolute;\n    width: 190px;\n    height: 260px;\n    left: 50%;\n    margin-left: -95px;\n    background: rgba(255,255,255);\n    border-radius: 50%;\n    margin-top: -20px;\n    z-index: 3;\n}\n.body .chest > i{\n    position: absolute;\n    width: 21px;\n    height: 21px;\n    border-radius: 50%;\n    right: 30px;\n    top: 62px;\n    background: rgb(255,255,255);\n    box-shadow: 0 -5px 8px rgba(23, 34, 45, 0.15) inset, 2px 3px 2px rgba(23, 34, 45, 0.05);\n}\n.body .chest > i:before{\n    position:absolute;\n    content: "";\n    width: 75%;\n    height: 65%;\n    top: 15%;\n    left: 13%;\n    background-color: transparent;\n    border-radius: 50%;\n    box-shadow: 0 5px 8px rgba(23, 34, 45, 0.08) inset;\n\n}\n.body .belly{\n    z-index: 1;\n    position: absolute;\n    width: 240px;\n    height: 310px;\n    left: 50%;\n    margin-left: -120px;\n    border-radius: 50%;\n    background: rgba(255,255,255);\n    margin-top: -7px;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n.body .arm{\n    position:absolute;\n}\n.body .arm:before,\n.body .arm:after{\n    content: "";\n    position: absolute;\n}\n.body .arm:before{\n    border-radius: 50%;\n    width: 90px;\n    height: 200px;\n    background: rgba(255,255,255);\n}\n.body .arm.left:before{\n    left: 50%;\n    margin-left: -17px;\n    margin-top: 18px;\n    transform-origin: top center;\n    transform: rotate(27deg);\n}\n.body .arm.right:before{\n    left: 50%;\n    margin-left: 20px;\n    margin-top: 15px;\n    transform-origin: top center;\n    transform: rotate(-27deg);\n}\n.body .arm:after{\n    width: 80px;\n    height: 150px;\n    background: rgba(255,255,255);\n    border-radius: 50%;\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n}\n.body .left.arm:after{\n    margin-left: -86px;\n    margin-top: 97px;\n    transform: rotate(-7deg);\n    transform-origin: top center;\n}\n.body .right.arm:after{\n    margin-left: 101px;\n    margin-top: 97px;\n    transform: rotate(7deg);\n    transform-origin: top center;\n}\n\n.body .arm .fingers{\n    position: absolute;\n}\n.body .arm .fingers:before,\n.body .arm .fingers:after{\n    content: "";\n    position: absolute;\n    background: rgba(255,255,255);\n    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, \n                0 5px 15px rgba(23, 34, 45, 0.2);\n    border-radius: 50%;\n    width: 18px;\n    height: 40px;\n    transform-origin: top center;\n}\n.body .arm.left .fingers:before{  \n    margin-left: -58px;\n    margin-top: 222px;\n    transform: rotate(-27deg);\n    z-index: 2;\n}\n.body .arm.right .fingers:before{\n    margin-left: 138px;\n    margin-top: 220px;\n    transform: rotate(22deg);\n    z-index: 2;\n}\n.body .arm.left .fingers:after{\n    margin-left: -25px;\n    margin-top: 218px;\n    transform: rotate(4deg);\n}\n.body .arm.right .fingers:after{\n    margin-left: 107px;\n    margin-top: 218px;\n    transform: rotate(-4deg);\n}\n#baymax .leg{\n    position: absolute;\n    width: 50px;\n    height: 160px;\n    background: rgba(255,255,255);\n    top: 250px;\n}\n#baymax .leg.left{\n    margin-left: 0;\n    border-bottom-right-radius: 15px;\n    box-shadow: -7px -6px 7px rgba(23, 34, 45, 0.1) inset;\n}\n#baymax .leg.right{\n    margin-left: 50px;\n    border-bottom-left-radius: 15px;\n    box-shadow: 7px -6px 7px rgba(23, 34, 45, 0.1) inset;\n}\n#baymax .leg:before{\n    content: "";\n    position: absolute;\n    width: 25px;\n    height: 100%;\n    background-color: white;\n}\n#baymax .leg.left:before{\n    border-bottom-left-radius: 103%;\n    margin-left: -25px;\n    box-shadow: 7px 15px 7px rgba(23, 34, 45, 0.4) inset;\n}\n#baymax .leg.right:before{\n    border-bottom-right-radius: 103%;\n    margin-left: 50px;\n    box-shadow: -7px 15px 7px rgba(23, 34, 45, 0.4) inset;\n}\n/*画完了，让他保护你吧❤*/\n',r=n;exports.default=r;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=t(require("./css.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n={id:void 0,time:100,ui:{code:document.querySelector("#code"),writeStyle:document.querySelector("#writeStyle")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:function(){n.ui.code.innerText=e.default.substr(0,n.n),n.ui.writeStyle.innerText=e.default.substr(0,n.n),n.bindEvents(),n.play()},bindEvents:function(){for(var e in n.events)if(n.events.hasOwnProperty(e)){var t=n.events[e];document.querySelector(e).onclick=n[t]}},run:function(){n.n+=1,n.n>e.default.length?window.clearInterval(n.id):(n.ui.code.innerText=e.default.substr(0,n.n),n.ui.code.scrollTop=n.ui.code.scrollHeight,n.ui.writeStyle.innerHTML=e.default.substr(0,n.n))},play:function(){n.id=setInterval(n.run,n.time)},pause:function(){window.clearInterval(n.id)},slow:function(){n.pause(),n.time=300,n.play()},normal:function(){n.pause(),n.time=100,n.play()},fast:function(){n.pause(),n.time=0,n.play()}};n.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=/main.2cbfbb36.js.map