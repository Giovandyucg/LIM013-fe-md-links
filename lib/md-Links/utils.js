//crear funciones con promesa para validar 
//del diagrama options,boleano--usar promesa
// const path = require('path');
// const fs = require('fs'); 
// const marked = require('marked'); 
// const fetch = require('node-fetch');
// const cwd = process.cwd();
// const renderer = new marked.Renderer();
// const ruta2 = 'E:/pruebas/hola mundo';
// const ruta1 = './test/prueba/yesenia.md';
// const ruta3 = 'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba';
// //Determinar si existe la ruta
// export const isValidPath = route => {
//      if (fs.existsSync(route)) {
//       return true;
//      } else {
//       return false;
//      }
// };
// //  console.log(isValidPath(ruta1)); 
// export const pathAbsolute = (route) => {
//   if(path.isAbsolute(route)){
//     return true; 
//   } else {
//     return false;
//   }
// };
// // console.log('is absolute: ', pathAbsolute(ruta2));
// // DETERMINAR SI LA RUTA ES ABSOLUTA
// export const getPathAbsolute = (route) => pathAbsolute(route) ? route : path.resolve(route);
// // export const pathAbsolute = (route) => {
// //   const isAbsolute = path.isAbsolute(route);
// //   return isAbsolute;
// // };
// //  console.log('is absolute: ', getPathAbsolute(ruta2));
//  //transformar ruta relativa a abasoluta
// // export const transAbsolute = route => (pathAbsolute(route)===true) ? route:path.resolve(route);
// const transAbsolute = (route) => {
//   if (pathAbsolute(route)) {
//       return route;
//   } else {
//       return path.resolve(route);
//   }
// };
// //  export const transAbsolute = route => path.join(cwd, route);
// //  console.log('transAbsolute: ', transAbsolute(ruta1));
//  //Preguntar si es directorio
// export const pathIsDirectory = (route) =>
//     {const stats=fs.statSync(route);
//      if(stats.isDirectory()){
//        return true;
//      }else{
//        return false;
//      }
// };
// //  console.log(`Es directorio:`, pathIsDirectory(ruta3));
// // condicion si es archivo?
// export const isFile = route => {
//    const Fs=fs.statSync(route);
//     if(Fs.isFile()){
//      return true;
//     }else{
//      return false;
//      }  
// } 
// //  console.log('is file: ', isFile(ruta1));
// //Extension .md
//  export const typeMarkdown = (route) => path.extname(route);
// // Función para identificar que tipo de archivo es la ruta
// // const typeMarkdown = (route) => {
// //   const result = path.extname(route) === '.md' ? true : false;
// //   return result;
// // };
//   //  console.log(`Tiene la extension md:`, typeMarkdown(ruta1));
// //Leer archivos sincrono
// export const readingFiles = (route) => fs.readFileSync(route, 'utf-8');
//   //  console.log(readingFiles('C:/Users/HP/MD-links/LIM013-fe-md-links/test/prueba/prueba1.md'));
//    //Leer directorio síncrono-array 
// export const readingDirectories = (route) => fs.readdirSync(route);
//   //  console.log(readingDirectories('C:/Users/HP/MD-links/LIM013-fe-md-links')); 
// //Obtener archivo y directorios
// // devuelve nuevo array de elementos con la ruta de cada archivo/directorio
// export const getFilesAndDirectories = (route) => {
//      return readingDirectories(route).map(element =>
//       path.join(route, element),);
// };
//   //  console.log('Probando la funcion... : ');
//   //  console.log(getFilesAndDirectories('C:/Users/HP/MD-links/LIM013-fe-md-links'));
// export const getFiles = (route) => {
//     let arrayOfMDFiles = []; // vamos a ir agregando elementos al array con push
//     const newPath=transAbsolute(route);
//     if (isFile(newPath) === true) { //condiciona si path es archivo
//         if (typeMarkdown(newPath) === '.md') { // si es estrictamente .md 
//            arrayOfMDFiles.push(newPath);//si cumple la ocndicion se agregara el archivo al arrayOfMdFiles
//         }
//     } else { // si no pasara lo siguiente ...
//       getFilesAndDirectories(route).forEach((element) => { //llamar a getArrayFilesAndDirectories, para que entre dentro del nuevo directorio.
//       const filesOfNewRoute = element;// como la función for each siempre llama a un element donde guarda la lista, nosotros lo llamamos file, guardamos los files del nuevo directorio en const files of new route
//       const getMDFilesInNewRoute = getFiles(filesOfNewRoute);//le pasamos la funcion getMdFiles a los files de la nueva ruta, para que haga la busqueda de archivos MD of vuelva a entrar a un nuevo diretcorio.
//       arrayOfMDFiles = arrayOfMDFiles.concat(getMDFilesInNewRoute);//concatenamos los files md de la nueva ruta con el array de files total
//      });//al pasar de getMDFiles dentro de getMDFiles hacemos uso de la recursionnnnn!!!
//     }
//     return arrayOfMDFiles;
// };
// // console.log(getFiles('./test/prueba/yesenia.md'));
// // console.log(getFiles('./test/prueba/prueba1.md'));
// // console.log(getFiles('README.md'));
// // console.log(getFiles('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test'));
// //Obtener los array de Links
// export const getLinks = (route) => {
//   if (!pathAbsolute(route)) {
//     const newTransAbsolutePath = transAbsolute(route);
//     let finalArrayOfMDLinks = [];
//     const renderer = new marked.Renderer();
//     getFiles(newTransAbsolutePath).forEach((file) => {
//       renderer.link = (href=file.getAttribute('href'), title, text) => {
//         const linkInfo = {
//           file: file,
//           href,
//           text: text.slice(0,50),
//         };
//         finalArrayOfMDLinks.push(linkInfo);
//       };
//       marked(readingFiles(file), { renderer });
//     });
//     return finalArrayOfMDLinks; 
//   };
// };
// // export const getLinks = (route) => {
// //   let arrayMDLinks = [];
// //   getFiles(route).forEach((file) => {
// //     renderer.link = (href, title, text) => {
// //               const link = {
// //                 file: file,
// //                 href:file.getAttribute('href'),
// //                 text: text.slice(0,50),
// //               };
// //           arrayMDLinks.push(link);
// //       };
// //       marked(readingFiles(file), { renderer });
// //   });
// //   return arrayMDLinks;
// // };
// // console.log(getLinks('./test/prueba/prueba1.md'));
// console.log(getLinks('README.md'));
// // console.log(getLinks(ruta1));
// // export const getLinks = (route) => {
// //   if (!pathAbsolute(route)) {
// //     const newTransAbsolutePath = transAbsolute(route);
// //     let finalArrayOfMDLinks = [];
// //     const renderer = new marked.Renderer();
// //     getFiles(newTransAbsolutePath).forEach((file) => {
// //       renderer.link = (href, title, text) => {
// //         const linkInfo = {
// //           href,
// //           text,
// //           file
// //         };
// //         finalArrayOfMDLinks.push(linkInfo);
// //       };
// //       marked(readingFiles(file), { renderer });
// //     });
// //     return finalArrayOfMDLinks; 
// //   } 
// // }
// console.log('Aquí va la prueba del marked(función getLinks) :')
// console.log(getLinks('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\prueba1.md'));
// console.log(getLinks('./test/prueba/prueba1.md'));
// console.log('Aquí va la prueba del marked(función getLinks) :')
// console.log(getLinks('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md'));
// "use strict";