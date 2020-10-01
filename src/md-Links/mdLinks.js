import suma from './index';
console.log(suma(2, 3))

//crear funciones con promesa para validar 
//del diagrama options,boleano--usar promesa
const path = require('path');
const fs = require('fs'); 
// const myMarked = require('marked'); 


const ruta2 = 'E:/pruebas/hola mundo';
const ruta1 = './test/prueba/yesenia.md';
const ruta3 = 'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\prueba1.md';

const isValidPath = route => {
  if (fs.existsSync(route)) {
    return true;
  } else {
    return false;
  }
};
console.log(isValidPath(ruta1)); 

// DETERMINAR SI LA RUTA ES ABSOLUTA

const pathAbsolute = route => path.isAbsolute(route);
console.log('is absolute: ', pathAbsolute(ruta2)); 

//transformar ruta relativa a abasoluta

const transAbsolute = route => path.resolve(route);
console.log('transAbsolute: ', transAbsolute(ruta1)); 


//Es directorio
const pathIsDirectory = (route) =>
 {const stats=fs.statSync(route);
  if(stats.isDirectory()){
    return true;
  }else{
    return false;
  }
};
console.log(pathIsDirectory(ruta3));


// VERIFICAR SI ES UN ARCHIVO

const isFile = route => {
  const Fs=fs.statSync(route);
 if(Fs.isFile()){
   return true;
 }else{
   return false;
 }  
} 
console.log('is file: ', isFile(ruta1));

// const isFile = (route) => {
//   return  fs.statSync(route).isFile()
// };


const typeOfExtension = (route) => path.extname(route);
// Función para identificar que tipo de archivo es la ruta

// const fileMd = (route) => {
//   return fileReturn(route).filter((file => path.extname(file) === '.md'));
// };
console.log(`Tiene la extension:`, typeOfExtension(ruta1));

const readingFiles = (route) => fs.readFileSync(route, 'utf-8');
// función sincróna para leer los files
console.log(readingFiles('C:/Users/HP/MD-links/LIM013-fe-md-links/test/prueba/prueba1.md'));
const readingDirectories = (route) => fs.readdirSync(route);
 console.log(readingDirectories('C:/Users/HP/MD-links/LIM013-fe-md-links')); 
 //devuelve array de elementos