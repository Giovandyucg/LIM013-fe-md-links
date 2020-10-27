"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils1.js");

// export default mdLinks;
const mdLinks = (route, options) => {
  if (options.validate === true) {
    return (0, _utils.optionValidate)(route); // .then(resp => resp).catch(err => err);  
  }

  if (options.validate === false) {
    return new Promise(resolve => resolve((0, _utils.getLinks)(route)));
  }
};

var _default = mdLinks; // module.exports = mdLinks;

exports.default = _default;