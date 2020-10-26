"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils1.js");

// const functionMdLinks = require('./utils1.js');
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
// console.log('Prueba de mdLinks, validate false');
// console.log(mdLinks('prueba1.md', { validate: true })); 
// mdLinks('./test/prueba/Documento/prueba4.md', { validate: false }).then(res=>console.log(res));
// mdLinks('./test/prueba/Documento/prueba4.md',{validate:true}).then(res=>console.log(res));
// console.log(''); 
// const mdLinks = (path, options) => {
//   const allLinks = new Promise((resolve, reject) => {
//       if (functionMdLinks.pathValid(path)) {
//           if (options.validate === false) {
//               resolve(functionMdLinks.getLinks(path));
//           } else if (options.validate === true) {
//               return (functionMdLinks.optionValidate(path).then((links) => resolve(links)));
//           } else {
//               // reject ((new Error('Option invalidate: ')).message)
//               reject('Parametro invalido ');
//           }
//       } else {
//           // reject ((new Error('Path is not valid ')).message)
//           reject(console.log('Path is not valid'))
//       }
//   });
//   return allLinks;
// };
// // mdLinks(ruta1, option1).then(res => console.log(res));
// module.exports = { mdLinks };
// console.log(mdLinks('prueba1.md', { validate: true })); 
// // console.log(mdLinks('README.md', { validate: false }))

exports.default = _default;