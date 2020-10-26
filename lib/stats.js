"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStats = exports.uniqueStats = exports.linksStats = void 0;

// const arrLinks = [
//     // {
//     //   href: '#1-preámbulo',
//     //   text: '1. Preámbulo',
//     //   file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//     //   status: 500,
//     //   statusText: 'FAIL'
//     // },
//     {
//       href: '#5-criterios-de-aceptación-mínimos-del-proyecto',
//       text: '5. Criterios de aceptación mínimos del proyecto',
//       file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//       status: 500,
//       statusText: 'FAIL'
//     },
//     {
//       href: 'https://nodejs.org/es/',
//       text: 'Node.js',
//       file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//       status: 200,
//       statusText: 'OK'
//     },
//     {
//       href: 'https://developers.google.com/v8/',
//       text: 'motor de JavaScript V8 de Chrome',
//       file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//       status: 200,
//       statusText: 'OK'
//     },
//     {
//         href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
//         text: '<code>export</code>',
//         file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//         status: 200,
//         statusText: 'OK'
//     },
//     {
//       href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
//       text: '<code>export</code>',
//       file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//       status: 200,
//       statusText: 'OK'
//     },
//     {
//         href: '#3-objetivos-de-aprendizaje',
//         text: '3. Objetivos de aprendizaje',
//         file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md',
//         status: 500,
//         statusText: 'FAIL'
//       },
// ];
const linksStats = arrObj => {
  return arrObj.length;
}; //   console.log('total Links: ' + linksStats(arrLinks));


exports.linksStats = linksStats;

const uniqueStats = arrObj => {
  return new Set(arrObj.map(links => links.href)).size;
}; //   console.log('unique: ' + uniqueStats(arrLinks));


exports.uniqueStats = uniqueStats;

const brokenStats = arrObjValidate => {
  return arrObjValidate.filter(link => link.status >= 400).length;
}; // console.log('broken: ' + brokenStats(arrLinks));


exports.brokenStats = brokenStats;