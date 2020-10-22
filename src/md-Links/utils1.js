

// const jsdom = require ('jsdom');
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const renderer = new marked.Renderer();
const fetch = require('node-fetch');



//***********************************PRUEBAS**********************************

const ruta2 = 'E:/pruebas/hola mundo';
const ruta1 = './test/prueba/yesenia.md';
const ruta3 = 'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba';

//*****************************************************************************


export const pathValid=(route)=> fs.existsSync(route)?  true:false;
// console.log(pathValid(ruta1));

export const pathAbsolute = (route)=> path.isAbsolute(route) ? true:false;
// console.log(pathAbsolute(ruta1));

// const transAbsolute = (route) => transAbsolute(route) ? path.resolve(route):false;
// console.log(transAbsolute(ruta1));
// export const transAbsolute = (route) => {
//     const absolutePath = path.resolve(route);
//     return absolutePath;
//   };
  

  export const transAbsolute = (route) => {
    return path.resolve(route);
  };
  // console.log(transAbsolute('prueba1.md'));


export const pathIsDirectory = (route)=>{
    const stats = fs.lstatSync(route);
    const directory =(stats.isDirectory(route)) ? true:false;
    return directory;
}
// console.log(pathIsDirectory(ruta3));


export const pathIsFile =( route) =>{
    const file = fs.lstatSync(route);
    const isFile = (file.isFile(route)) ? true:false;
    return isFile;
}
// console.log(pathIsFile(ruta1));




// devuelve nuevo array de elementos con la ruta de cada archivo/directorio
export const getFilesAndDirectories = (route) => {
    const readingDirectories=(route) => fs.readdirSync(route);
     return readingDirectories(route).map(element =>
      path.join(route, element),);
};
// console.log(getFilesAndDirectories(ruta3));

 export  const typeMarkdown = (route) => path.extname(route);

 export  const getFiles = (route) => {
        let arrayOfMDFiles = []; // vamos a ir agregando elementos al array con push
        const newPath=transAbsolute(route);
        if (pathIsFile(newPath) === true) { //condiciona si path es archivo
           
            if (typeMarkdown(newPath) === '.md') { // si es estrictamente .md 
               arrayOfMDFiles.push(newPath);//si cumple la ocndicion se agregara el archivo al arrayOfMdFiles
            }
        } else { // si no pasara lo siguiente ...
            getFilesAndDirectories(route).forEach((element) => { //llamar a getArrayFilesAndDirectories, para que entre dentro del nuevo directorio.
          const filesOfNewRoute = element;// como la función for each siempre llama a un element donde guarda la lista, nosotros lo llamamos file, guardamos los files del nuevo directorio en const files of new route
          const getMDFilesInNewRoute = getFiles(filesOfNewRoute);//le pasamos la funcion getMdFiles a los files de la nueva ruta, para que haga la busqueda de archivos MD of vuelva a entrar a un nuevo diretcorio.
          arrayOfMDFiles = arrayOfMDFiles.concat(getMDFilesInNewRoute);//concatenamos los files md de la nueva ruta con el array de files total
          });//al pasar de getMDFiles dentro de getFiles hacemos uso de la recursionnnnn!!!
        }
        return arrayOfMDFiles;
    };
    // console.log(getFiles('./test/prueba/texto'))

    

    export const getLinks = (route) => {
          let arrayMDLinks = [];
          const readingFiles = (route) => fs.readFileSync(route, 'utf-8');
           getFiles(route).forEach((file) => {
            // const prueba = file.href.match(hrefs);
            // console.log(prueba);  
            // const hrefs = /\((http|https|ftp|ftps).+?\)/g;
            renderer.link = (href, title, text) => {
                      const link = {
                        href:href,
                        text:href,
                        file:file,
                      };
                  arrayMDLinks.push(link);
              };
              
              marked(readingFiles(file), { renderer});
              
          });
          // console.log(arrayMDLinks,'hola mundo');
          return arrayMDLinks;
          
        };

        // console.log(getLinks('./test/prueba/varios/pruebaVarios.md'));
        // console.log(getLinks('prueba1.md'));


     export const optionValidate = (route)=>{
          const linksArray = getLinks(route);
          const valid = linksArray.map((link) => fetch(link.href)
          .then((res)=>({
            href: link.href,
            text: link.text.substring(0, 50),
            file: link.file,
            status: res.status,
            statusText: res.statusText,
        
          }))
          .catch(()=>({
            href:link.href,
            text: link.text,
            file: link.file,
            status: 'no status',
            statusText: 'FAIL',
        
          })));
        
          return Promise.all(valid);
          
        };
         
        // module.exports = optionValidate;
        
        // export default optionValidate;
        // optionValidate('./test/prueba/yesenia.md').then((res) => console.log(res)).catch((err)=>console.log(err))
        // optionValidate('prueba1.md').then((res) => console.log(res)).catch((err)=>console.log(err))
        //  console.log(optionValidate('prueba1.md'));


        

     
         

         

        
          
