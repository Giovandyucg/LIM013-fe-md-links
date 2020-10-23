#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.funcionCli = exports.statsValidate = exports.optionStats = void 0;

var _mdLinks = _interopRequireDefault(require("./mdLinks.js"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {optionValidate} from './utils1'
// const validate = require('./index');
// import {optionValidate} from './utils1'
// import {linksStats, uniqueStats, brokenStats} from './stats.js';
var optionStats = function optionStats(arrLinks) {
  var linksStats = arrLinks.length;
  var uniqueStats = new Set(arrLinks.map(function (element) {
    return element.href;
  })).size;

  if (linksStats === 0) {
    return 'Is 0 Links in this path! !';
  }

  var statsTemplate = "\n    Mostrar Stats:\n    Total: ".concat(linksStats, "\n    Unique: ").concat(uniqueStats, "\n      ");
  return statsTemplate;
}; // console.log(optionStats(prueba));


exports.optionStats = optionStats;

var statsValidate = function statsValidate(arrLinks) {
  var linksStats = arrLinks.length;
  var uniqueStats = new Set(arrLinks.map(function (element) {
    return element.href;
  })).size;
  var brokenStats = arrLinks.filter(function (href) {
    return href.status >= 400 || href.status === 'no status';
  }).length; // const brokenLinks = arrLinks.filter(link => link.status >= 400).length;

  var statsValidateTemplate = "\n    Mostrar Stats Validate\n    Total: ".concat(linksStats, "\n    Unique: ").concat(uniqueStats, "\n    Broken: ").concat(brokenStats, "\n      ");
  return statsValidateTemplate;
}; // console.log(statsValidate(prueba));


exports.statsValidate = statsValidate;
var warning = "\n    ".concat(_chalk["default"].magenta('************************** Valid Arguments *************************'), "\n    ").concat(_chalk["default"].magenta('Option 1:'), " ").concat(_chalk["default"].greenBright('md-links <path-to-file>'), "\n    ").concat(_chalk["default"].magenta('Option 2:'), " ").concat(_chalk["default"].greenBright('md-links <path-to-file> --validate || -v'), "\n    ").concat(_chalk["default"].magenta('Option 3:'), " ").concat(_chalk["default"].greenBright('md-links <path-to-file> --stast || -s'), "\n    ").concat(_chalk["default"].magenta('Option 4:'), " ").concat(_chalk["default"].greenBright('md-links <path-to-file> --stast --validate || -s -v'), "\n    ").concat(_chalk["default"].magenta('Option 5:'), " ").concat(_chalk["default"].greenBright('md-links <path-to-file> --validate --stast || -v -s'), "\n    ").concat(_chalk["default"].magenta('********************************************************************'), "\n    ").concat(_chalk["default"].magenta('--validate'), " ").concat(_chalk["default"].green('Para averiguar si el link funciona o no'), "\n    ").concat(_chalk["default"].magenta('--stast'), " ").concat(_chalk["default"].green('Para mostrar estadísticas básicas sobre los links'), "    \n    ").concat(_chalk["default"].magenta('--stast --validate'), " ").concat(_chalk["default"].green('Para obtener estadísticas de las validaciónes'), "\n    ");
var route = process.argv[2]; // segundo argumento 

var validate = process.argv.indexOf('--validate');
var optValidate = process.argv.indexOf('-v'); // tercer argumento 

var stats = process.argv.indexOf('--stats');
var optStats = process.argv.indexOf('-s'); // cuarto argumento
// const combinado=process.argv.indexOf('-v -s')//quinta opcion 

var helps = process.argv.indexOf('--help'); // const args = process.argv[2];
// let options= process.argv[3];
// console.log('route',args);
// console.log('options',options);

var funcionCli = function funcionCli(route) {
  if (helps >= 0 || route === undefined) {
    console.log(warning);
  }

  if (route) {
    if ((stats >= 0 || optStats >= 0) && (validate >= 0 || optValidate >= 0)) {
      return (0, _mdLinks["default"])(route, {
        validate: true
      }).then(function (links) {
        return console.log(_chalk["default"].green(statsValidate(links)));
      })["catch"](function (error) {
        return console.log(_chalk["default"].bgRedBright.black(error));
      });
    }

    if (validate >= 0 || optValidate >= 0) {
      return (0, _mdLinks["default"])(route, {
        validate: true
      }) // .then((links) => console.log(optionValidate(links)))
      .then(function (links) {
        return links.forEach(function (link) {
          return console.log(_chalk["default"].green(link.file, link.href, link.statusText, link.status, link.text));
        });
      })["catch"](function (error) {
        return console.log(warning);
      });
    }

    if (stats >= 0 || optStats >= 0) {
      return (0, _mdLinks["default"])(route, {
        validate: false
      }).then(function (links) {
        return console.log(_chalk["default"].blueBright(optionStats(links)));
      })["catch"](function (error) {
        return console.error(error);
      });
    } else {
      return (0, _mdLinks["default"])(route, {
        validate: false
      }) // .then((links) => console.log(links))
      .then(function (links) {
        return links.forEach(function (link) {
          return console.log(_chalk["default"].green(link.href, link.file, link.text));
        });
      })["catch"](function (error) {
        return console.error(_chalk["default"].bgRedBright.black('Error'));
      });
    }
  }
};

exports.funcionCli = funcionCli;
funcionCli(route); //   console.log(process.argv);
// console.log('probando funcionCli', funcionCli('README.md','--stats'))
// funcionCli('./prueba').then((res) => console.log('este',res));
// console.log(funcionCli('README.md'))