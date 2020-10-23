"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionValidate = exports.getLinks = exports.getFiles = exports.typeMarkdown = exports.getFilesAndDirectories = exports.pathIsFile = exports.pathIsDirectory = exports.transAbsolute = exports.pathAbsolute = exports.pathValid = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const jsdom = require ('jsdom');
// const path = require('path');
// const fs = require('fs');
// const marked = require('marked');
// const renderer = new marked.Renderer();
// const fetch = require('node-fetch');
var renderer = new _marked["default"].Renderer();
//***********************************PRUEBAS**********************************
var ruta2 = 'E:/pruebas/hola mundo';
var ruta1 = './test/prueba/yesenia.md';
var ruta3 = "C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba"; //*****************************************************************************

var pathValid = function pathValid(route) {
  return _fs["default"].existsSync(route) ? true : false;
}; // console.log(pathValid(ruta1));


exports.pathValid = pathValid;

var pathAbsolute = function pathAbsolute(route) {
  return _path["default"].isAbsolute(route) ? true : false;
}; // console.log(pathAbsolute(ruta1));
// const transAbsolute = (route) => transAbsolute(route) ? path.resolve(route):false;
// console.log(transAbsolute(ruta1));
// export const transAbsolute = (route) => {
//     const absolutePath = path.resolve(route);
//     return absolutePath;
//   };


exports.pathAbsolute = pathAbsolute;

var transAbsolute = function transAbsolute(route) {
  return _path["default"].resolve(route);
}; // console.log(transAbsolute('prueba1.md'));


exports.transAbsolute = transAbsolute;

var pathIsDirectory = function pathIsDirectory(route) {
  var stats = _fs["default"].lstatSync(route);

  var directory = stats.isDirectory(route) ? true : false;
  return directory;
}; // console.log(pathIsDirectory(ruta3));


exports.pathIsDirectory = pathIsDirectory;

var pathIsFile = function pathIsFile(route) {
  var file = _fs["default"].lstatSync(route);

  var isFile = file.isFile(route) ? true : false;
  return isFile;
}; // console.log(pathIsFile(ruta1));
// devuelve nuevo array de elementos con la ruta de cada archivo/directorio


exports.pathIsFile = pathIsFile;

var getFilesAndDirectories = function getFilesAndDirectories(route) {
  var readingDirectories = function readingDirectories(route) {
    return _fs["default"].readdirSync(route);
  };

  return readingDirectories(route).map(function (element) {
    return _path["default"].join(route, element);
  });
}; // console.log(getFilesAndDirectories(ruta3));


exports.getFilesAndDirectories = getFilesAndDirectories;

var typeMarkdown = function typeMarkdown(route) {
  return _path["default"].extname(route);
};

exports.typeMarkdown = typeMarkdown;

var getFiles = function getFiles(route) {
  var arrayOfMDFiles = []; // vamos a ir agregando elementos al array con push

  var newPath = transAbsolute(route);

  if (pathIsFile(newPath) === true) {
    //condiciona si path es archivo
    if (typeMarkdown(newPath) === '.md') {
      // si es estrictamente .md 
      arrayOfMDFiles.push(newPath); //si cumple la ocndicion se agregara el archivo al arrayOfMdFiles
    }
  } else {
    // si no pasara lo siguiente ...
    getFilesAndDirectories(route).forEach(function (element) {
      //llamar a getArrayFilesAndDirectories, para que entre dentro del nuevo directorio.
      var filesOfNewRoute = element; // como la función for each siempre llama a un element donde guarda la lista, nosotros lo llamamos file, guardamos los files del nuevo directorio en const files of new route

      var getMDFilesInNewRoute = getFiles(filesOfNewRoute); //le pasamos la funcion getMdFiles a los files de la nueva ruta, para que haga la busqueda de archivos MD of vuelva a entrar a un nuevo diretcorio.

      arrayOfMDFiles = arrayOfMDFiles.concat(getMDFilesInNewRoute); //concatenamos los files md de la nueva ruta con el array de files total
    }); //al pasar de getMDFiles dentro de getFiles hacemos uso de la recursionnnnn!!!
  }

  return arrayOfMDFiles;
}; // console.log(getFiles('./test/prueba/texto'))


exports.getFiles = getFiles;

var getLinks = function getLinks(route) {
  var arrayMDLinks = [];

  var readingFiles = function readingFiles(route) {
    return _fs["default"].readFileSync(route, 'utf-8');
  };

  getFiles(route).forEach(function (file) {
    // const prueba = file.href.match(hrefs);
    // console.log(prueba);  
    // const hrefs = /\((http|https|ftp|ftps).+?\)/g;
    renderer.link = function (href, title, text) {
      var link = {
        href: href,
        text: href,
        file: file
      };
      arrayMDLinks.push(link);
    };

    (0, _marked["default"])(readingFiles(file), {
      renderer: renderer
    });
  }); // console.log(arrayMDLinks,'hola mundo');

  return arrayMDLinks;
}; // console.log(getLinks('./test/prueba/varios/pruebaVarios.md'));
// console.log(getLinks('prueba1.md'));


exports.getLinks = getLinks;

var optionValidate = function optionValidate(route) {
  var linksArray = getLinks(route);
  var valid = linksArray.map(function (link) {
    return (0, _nodeFetch["default"])(link.href).then(function (res) {
      return {
        href: link.href,
        text: link.text.substring(0, 50),
        file: link.file,
        status: res.status,
        statusText: res.statusText
      };
    })["catch"](function () {
      return {
        href: link.href,
        text: link.text,
        file: link.file,
        status: 'no status',
        statusText: 'FAIL'
      };
    });
  });
  return Promise.all(valid);
}; //  export default getLinks;
// module.exports = optionValidate;
// export default optionValidate;
// optionValidate('./test/prueba/yesenia.md').then((res) => console.log(res)).catch((err)=>console.log(err))
// optionValidate('prueba1.md').then((res) => console.log(res)).catch((err)=>console.log(err))
//  console.log(optionValidate('prueba1.md'));


exports.optionValidate = optionValidate;