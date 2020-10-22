"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showConsole = void 0;

var _stats = require("./stats.js");

var _mdLinks = require("./mdLinks");

const validateOption = {
  validate: false
}; // const pathInput = process.argv[2];
// const firstOption = process.argv[3];
// const secondOption = process.argv[4];
// showConsole(pathInput, firstOption, secondOption).then(resp => console.log(resp));

const showConsole = (pathEntrate, firstOption, secondOption) => {
  if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
    validateOption.validate = true;
    return (0, _mdLinks.mdLinks)(pathEntrate, validateOption).then(res => `Total:${(0, _stats.linksStats)(res)}\nUnique:${(0, _stats.uniqueStats)(res)}\nBroken:${(0, _stats.brokenStats)(res)}`);
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    return (0, _mdLinks.mdLinks)(pathEntrate, validateOption).then(res => {
      return res.map(objLinks => `File: ${pathEntrate}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`).join('');
    });
  } else if (firstOption === '--stats') {
    return (0, _mdLinks.mdLinks)(pathEntrate, validateOption).then(res => `Total:${(0, _stats.linksStats)(res)}\nUnique:${(0, _stats.uniqueStats)(res)}`);
  } else {
    return (0, _mdLinks.mdLinks)(pathEntrate, validateOption).then(res => {
      return res.map(objLinks => `File: ${pathEntrate}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`).join('');
    });
  }
}; //   showConsole(pathInput, firstOption, secondOption);


exports.showConsole = showConsole;
console.log('probando showConsole', showConsole('README.md', '--stats'));
console.log(showConsole('README.md'));