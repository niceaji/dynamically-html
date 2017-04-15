(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(html){
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
};
},{}],2:[function(require,module,exports){
var dynamicallyHtml = require('..');
var html = require('./widget.html');

dynamicallyHtml(html);

},{"..":1,"./widget.html":3}],3:[function(require,module,exports){
module.exports = "<div style=\"position:absolute;top:0;left:0;width:100%;padding:10px;background-color: burlywood\">hello world</div>";

},{}]},{},[2]);
