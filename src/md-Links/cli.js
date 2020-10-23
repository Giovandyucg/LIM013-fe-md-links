#!/usr/bin/env node
import mdLinks from './mdLinks.js';
import chalk from 'chalk';
// import {optionValidate} from './utils1'
// const validate = require('./index');
// import {optionValidate} from './utils1'
// import {linksStats, uniqueStats, brokenStats} from './stats.js';



export const optionStats = (arrLinks) => {
  const linksStats = arrLinks.length;
  const uniqueStats = new Set(arrLinks.map((element) => element.href)).size;
  if (linksStats === 0) {
    return 'Is 0 Links in this path! !';
  }
  const statsTemplate = `
    Mostrar Stats:
    Total: ${linksStats}
    Unique: ${uniqueStats}
      `;
  
  return statsTemplate;
};

// console.log(optionStats(prueba));

export const statsValidate = (arrLinks) => {
  const linksStats = arrLinks.length;
  const uniqueStats = new Set(arrLinks.map((element) => element.href)).size;
  const brokenStats = arrLinks.filter(href => href.status >= 400 || href.status === 'no status').length;
  // const brokenLinks = arrLinks.filter(link => link.status >= 400).length;
  const statsValidateTemplate = `
    Mostrar Stats Validate
    Total: ${linksStats}
    Unique: ${uniqueStats}
    Broken: ${brokenStats}
      `;
  return statsValidateTemplate;
};
// console.log(statsValidate(prueba));


const warning = `
    ${chalk.magenta('************************** Valid Arguments *************************')}
    ${chalk.magenta('Option 1:')} ${chalk.greenBright('md-links <path-to-file>')}
    ${chalk.magenta('Option 2:')} ${chalk.greenBright('md-links <path-to-file> --validate || -v')}
    ${chalk.magenta('Option 3:')} ${chalk.greenBright('md-links <path-to-file> --stast || -s')}
    ${chalk.magenta('Option 4:')} ${chalk.greenBright('md-links <path-to-file> --stast --validate || -s -v')}
    ${chalk.magenta('Option 5:')} ${chalk.greenBright('md-links <path-to-file> --validate --stast || -v -s')}
    ${chalk.magenta('********************************************************************')}
    ${chalk.magenta('--validate')} ${chalk.green('Para averiguar si el link funciona o no')}
    ${chalk.magenta('--stast')} ${chalk.green('Para mostrar estadísticas básicas sobre los links')}    
    ${chalk.magenta('--stast --validate')} ${chalk.green('Para obtener estadísticas de las validaciónes')}
    `;


const route = process.argv[2]; // segundo argumento 
const validate = process.argv.indexOf('--validate');
const optValidate = process.argv.indexOf('-v');// tercer argumento 
const stats = process.argv.indexOf('--stats');
const optStats = process.argv.indexOf('-s'); // cuarto argumento
// const combinado=process.argv.indexOf('-v -s')//quinta opcion 
const helps = process.argv.indexOf('--help');
// const args = process.argv[2];
// let options= process.argv[3];
// console.log('route',args);
// console.log('options',options);

export const funcionCli = (route) => {
  if (helps >= 0 || route === undefined) {
    console.log(warning);
  }
  if (route) {
    if ((stats >= 0 || optStats >= 0) && (validate >= 0 || optValidate >= 0)) {
     return mdLinks(route, { validate: true })
        .then((links) => console.log(chalk.green(statsValidate(links))))
        .catch((error) => console.log(chalk.bgRedBright.black(error)));
    }
    if (validate >= 0 || optValidate >= 0) {
      return mdLinks(route, { validate: true })
        // .then((links) => console.log(optionValidate(links)))
        .then((links) =>links.forEach(link =>console.log(chalk.green(link.file, link.href, link.statusText, link.status, link.text))))
        .catch((error) => console.log(warning));
    }
    if (stats >= 0 || optStats >= 0) {
      return mdLinks(route, { validate: false })
        .then((links) => console.log(chalk.blueBright(optionStats(links))))
        .catch((error) => console.error(error));
    } else {
      return mdLinks(route, { validate: false })
        // .then((links) => console.log(links))
        .then((links) =>links.forEach(link =>console.log(chalk.green(link.href,link.file,link.text))))
        .catch((error) => console.error(chalk.bgRedBright.black('Error')));
    }
  }
};

funcionCli(route);


//   console.log(process.argv);
// console.log('probando funcionCli', funcionCli('README.md','--stats'))
// funcionCli('./prueba').then((res) => console.log('este',res));

// console.log(funcionCli('README.md'))