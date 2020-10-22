"use strict";

var _mdLinks = require("./mdLinks");

// import { mdLinks } from './mdLinks.js';
// import { uniqueStats, linksStats, brokenStats } from './stats.js';
// const optionStats = (arrLinks) => {
//     // const linksStats = arrLinks.length;
//     // const uniqueStats = new Set(arrLinks.map((element) => element.href)).size;
//     if (totalLinks === 0) {
//       return 'No hay links!';
//     }
//     const statsTemplate = `
//       Final Stats:
//       TOTAL: ${linksStats}
//       UNIQUE: ${uniqueStats}
//         `;
//     return statsTemplate;
//   };
// console.log(optionStats(README.md));
// console.log(process.argv);
// const { mdLinks } = require('./mdLinks');
const statsOption = arrayOfMDLinks => {
  const totalLinks = arrayOfMDLinks.length;
  const uniqueLinks = new Set(arrayOfMDLinks.map(element => element.href)).size;

  if (totalLinks === 0) {
    return 'There is 0 Links in this path! Try another one!';
  }

  const statsTemplate = `
    Final Stats:
    TOTAL: ${totalLinks}
    UNIQUE: ${uniqueLinks}
      `;
  return statsTemplate;
};

const statsValidate = arrayOfMDLinks => {
  const totalLinks = arrayOfMDLinks.length;
  const uniqueLinks = new Set(arrayOfMDLinks.map(element => element.href)).size;
  const brokenLinks = new Set(arrayOfMDLinks.filter(href => href.status >= 400)).size;
  const statsValidateTemplate = `
    Final Stats Validate
    TOTAL: ${totalLinks}
    UNIQUE: ${uniqueLinks}
    BROKEN: ${brokenLinks}
      `;
  return statsValidateTemplate;
};

const help = `
Remember that to use this library you need to insert:
1) md-links <path-to-file>
2) md-links <path-to-file> [valid arguments]
*****************Valid Arguments*****************
⭐md-links <path-to-file> --validate   --stats
⭐md-links <path-to-file> -v   -s
⭐md-links <path-to-file> --validate
⭐md-links <path-to-file> --stats
*************************************************
`;
const route = process.argv[2]; // argumento 2

const validate = process.argv.indexOf('--validate');
const shortValidate = process.argv.indexOf('-v'); // argumento 3

const stats = process.argv.indexOf('--stats');
const shortStats = process.argv.indexOf('-s'); // argumento 4

const helpCom = process.argv.indexOf('--help');

const cliFunction = route => {
  if (helpCom >= 0 || route === undefined) {
    console.log(help);
  }

  if (route) {
    if ((stats >= 0 || shortStats >= 0) && (validate >= 0 || shortValidate >= 0)) {
      (0, _mdLinks.mdLinks)(route, {
        validate: true
      }).then(links => console.log(statsValidate(links))).catch(error => console.log(error));
    }

    if (validate >= 0 || shortValidate >= 0) {
      (0, _mdLinks.mdLinks)(route, {
        validate: true
      }).then(links => console.log(links)).catch(error => console.log(help));
    }

    if (stats >= 0 || shortStats >= 0) {
      (0, _mdLinks.mdLinks)(route, {
        validate: false
      }).then(links => console.log(statsOption(links))).catch(error => console.error(error));
    } else {
      (0, _mdLinks.mdLinks)(route, {
        validate: false
      }).then(links => console.log(links)).catch(error => console.error('Error'));
    }
  }
};

cliFunction(route); //   console.log(process.argv);

console.log('probando cli', cli('./prueba')); // cli('./prueba').then((res) => console.log('este',res));
// console.log(cli('./prueba'))