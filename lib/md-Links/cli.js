#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funcionCli = exports.statsValidate = exports.optionStats = void 0;

var _mdLinks = _interopRequireDefault(require("./mdLinks.js"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {optionValidate} from './utils1'
// const validate = require('./index');
// import {optionValidate} from './utils1'
// import {linksStats, uniqueStats, brokenStats} from './stats.js';
const optionStats = arrLinks => {
  const linksStats = arrLinks.length;
  const uniqueStats = new Set(arrLinks.map(element => element.href)).size;

  if (linksStats === 0) {
    return 'Is 0 Links in this path! !';
  }

  const statsTemplate = `
    Mostrar Stats:
    Total: ${linksStats}
    Unique: ${uniqueStats}
      `;
  return statsTemplate;
}; // console.log(optionStats(prueba));


exports.optionStats = optionStats;

const statsValidate = arrLinks => {
  const linksStats = arrLinks.length;
  const uniqueStats = new Set(arrLinks.map(element => element.href)).size;
  const brokenStats = arrLinks.filter(href => href.status >= 400 || href.status === 'no status').length; // const brokenLinks = arrLinks.filter(link => link.status >= 400).length;

  const statsValidateTemplate = `
    Mostrar Stats Validate
    Total: ${linksStats}
    Unique: ${uniqueStats}
    Broken: ${brokenStats}
      `;
  return statsValidateTemplate;
}; // console.log(statsValidate(prueba));


exports.statsValidate = statsValidate;
const warning = `
    ${_chalk.default.magenta('************************** Valid Arguments *************************')}
    ${_chalk.default.magenta('Option 1:')} ${_chalk.default.greenBright('md-links <path-to-file>')}
    ${_chalk.default.magenta('Option 2:')} ${_chalk.default.greenBright('md-links <path-to-file> --validate || -v')}
    ${_chalk.default.magenta('Option 3:')} ${_chalk.default.greenBright('md-links <path-to-file> --stast || -s')}
    ${_chalk.default.magenta('Option 4:')} ${_chalk.default.greenBright('md-links <path-to-file> --stast --validate || -s -v')}
    ${_chalk.default.magenta('Option 5:')} ${_chalk.default.greenBright('md-links <path-to-file> --validate --stast || -v -s')}
    ${_chalk.default.magenta('********************************************************************')}
    ${_chalk.default.magenta('--validate')} ${_chalk.default.green('Para averiguar si el link funciona o no')}
    ${_chalk.default.magenta('--stast')} ${_chalk.default.green('Para mostrar estadísticas básicas sobre los links')}    
    ${_chalk.default.magenta('--stast --validate')} ${_chalk.default.green('Para obtener estadísticas de las validaciónes')}
    `;
const route = process.argv[2]; // segundo argumento 

const validate = process.argv.indexOf('--validate');
const optValidate = process.argv.indexOf('-v'); // tercer argumento 

const stats = process.argv.indexOf('--stats');
const optStats = process.argv.indexOf('-s'); // cuarto argumento
// const combinado=process.argv.indexOf('-v -s')//quinta opcion 

const helps = process.argv.indexOf('--help'); // const args = process.argv[2];
// let options= process.argv[3];
// console.log('route',args);
// console.log('options',options);

const funcionCli = route => {
  if (helps >= 0 || route === undefined) {
    console.log(warning);
  }

  if (route) {
    if ((stats >= 0 || optStats >= 0) && (validate >= 0 || optValidate >= 0)) {
      return (0, _mdLinks.default)(route, {
        validate: true
      }).then(links => console.log(_chalk.default.green(statsValidate(links)))).catch(error => console.log(_chalk.default.bgRedBright.black(error)));
    }

    if (validate >= 0 || optValidate >= 0) {
      return (0, _mdLinks.default)(route, {
        validate: true
      }) // .then((links) => console.log(optionValidate(links)))
      .then(links => links.forEach(link => console.log(_chalk.default.green(link.file, link.href, link.statusText, link.status, link.text)))).catch(error => console.log(warning));
    }

    if (stats >= 0 || optStats >= 0) {
      return (0, _mdLinks.default)(route, {
        validate: false
      }).then(links => console.log(_chalk.default.blueBright(optionStats(links)))).catch(error => console.error(error));
    } else {
      return (0, _mdLinks.default)(route, {
        validate: false
      }) // .then((links) => console.log(links))
      .then(links => links.forEach(link => console.log(_chalk.default.green(link.href, link.file, link.text)))).catch(error => console.error(_chalk.default.bgRedBright.black('Error')));
    }
  }
};

exports.funcionCli = funcionCli;
funcionCli(route); //   console.log(process.argv);
// console.log('probando funcionCli', funcionCli('README.md','--stats'))
// funcionCli('./prueba').then((res) => console.log('este',res));
// console.log(funcionCli('README.md'))