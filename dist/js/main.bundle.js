!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.default="bismillah"},{}],2:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.default="hello"},{}],3:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.default="world"},{}],4:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}var e=a("./base/bismillah"),f=d(e),g=a("./components/hello"),h=d(g),i=a("./components/world"),j=d(i);console.log(f.default),console.log(h.default+" "+j.default)},{"./base/bismillah":1,"./components/hello":2,"./components/world":3}]},{},[4]);