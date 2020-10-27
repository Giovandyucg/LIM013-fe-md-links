"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionValidate = exports.getLinks = exports.getFiles = exports.typeMarkdown = exports.getFilesAndDirectories = exports.pathIsFile = exports.pathIsDirectory = exports.transAbsolute = exports.pathAbsolute = exports.pathValid = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderer = new _marked.default.Renderer();
//***********************************PRUEBAS**********************************
const ruta2 = 'E:/pruebas/hola mundo';
const ruta1 = './test/prueba/yesenia.md';
const ruta3 = 'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba'; //*****************************************************************************

const pathValid = route => _fs.default.existsSync(route) ? true : false; // console.log(pathValid(ruta1));


exports.pathValid = pathValid;

const pathAbsolute = route => _path.default.isAbsolute(route) ? true : false; // console.log(pathAbsolute(ruta1));


exports.pathAbsolute = pathAbsolute;

const transAbsolute = route => {
  return _path.default.resolve(route);
}; // console.log(transAbsolute('prueba1.md'));


exports.transAbsolute = transAbsolute;

const pathIsDirectory = route => {
  const stats = _fs.default.lstatSync(route);

  const directory = stats.isDirectory(route) ? true : false;
  return directory;
}; // console.log(pathIsDirectory(ruta3));


exports.pathIsDirectory = pathIsDirectory;

const pathIsFile = route => {
  const file = _fs.default.lstatSync(route);

  const isFile = file.isFile(route) ? true : false;
  return isFile;
}; // console.log(pathIsFile(ruta1));
// devuelve nuevo array de elementos con la ruta de cada archivo/directorio


exports.pathIsFile = pathIsFile;

const getFilesAndDirectories = route => {
  const readingDirectories = route => _fs.default.readdirSync(route);

  return readingDirectories(route).map(element => _path.default.join(route, element));
}; // console.log(getFilesAndDirectories(ruta3));


exports.getFilesAndDirectories = getFilesAndDirectories;

const typeMarkdown = route => _path.default.extname(route);

exports.typeMarkdown = typeMarkdown;

const getFiles = route => {
  let arrayOfMDFiles = []; // vamos a ir agregando elementos al array con push

  const newPath = transAbsolute(route);

  if (pathIsFile(newPath) === true) {
    //condiciona si path es archivo
    if (typeMarkdown(newPath) === '.md') {
      // si es estrictamente .md 
      arrayOfMDFiles.push(newPath); //si cumple la ocndicion se agregara el archivo al arrayOfMdFiles
    }
  } else {
    // si no pasara lo siguiente ...
    getFilesAndDirectories(route).forEach(element => {
      //llamar a getArrayFilesAndDirectories, para que entre dentro del nuevo directorio.
      const filesOfNewRoute = element; // como la función for each siempre llama a un element donde guarda la lista, nosotros lo llamamos file, guardamos los files del nuevo directorio en const files of new route

      const getMDFilesInNewRoute = getFiles(filesOfNewRoute); //le pasamos la funcion getMdFiles a los files de la nueva ruta, para que haga la busqueda de archivos MD of vuelva a entrar a un nuevo diretcorio.

      arrayOfMDFiles = arrayOfMDFiles.concat(getMDFilesInNewRoute); //concatenamos los files md de la nueva ruta con el array de files total
    }); //al pasar de getMDFiles dentro de getFiles hacemos uso de la recursionnnnn!!!
  }

  return arrayOfMDFiles;
}; // console.log(getFiles('./test/prueba/texto'))


exports.getFiles = getFiles;

const getLinks = route => {
  let arrayMDLinks = [];

  const readingFiles = route => _fs.default.readFileSync(route, 'utf-8');

  getFiles(route).forEach(file => {
    // const prueba = file.href.match(hrefs);
    // console.log(prueba);  
    // const hrefs = /\((http|https|ftp|ftps).+?\)/g;
    renderer.link = (href, title, text) => {
      const link = {
        href: href,
        text: href,
        file: file
      };
      arrayMDLinks.push(link);
    };

    (0, _marked.default)(readingFiles(file), {
      renderer
    });
  }); // console.log(arrayMDLinks,'hola mundo');

  return arrayMDLinks;
}; // console.log(getLinks('./test/prueba/varios/pruebaVarios.md'));
// console.log(getLinks('prueba1.md'));


exports.getLinks = getLinks;

const optionValidate = route => {
  const linksArray = getLinks(route);
  const valid = linksArray.map(link => (0, _nodeFetch.default)(link.href).then(res => ({
    href: link.href,
    text: link.text.substring(0, 50),
    file: link.file,
    status: res.status,
    statusText: res.statusText
  })).catch(() => ({
    href: link.href,
    text: link.text,
    file: link.file,
    status: 'no status',
    statusText: 'FAIL'
  })));
  return Promise.all(valid);
}; // optionValidate('./test/prueba/yesenia.md').then((res) => console.}log(res)).catch((err)=>console.log(err))
// optionValidate('prueba1.md').then((res) => console.log(res)).catch((err)=>console.log(err))


exports.optionValidate = optionValidate;