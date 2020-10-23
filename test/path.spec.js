
const data = require('./testData.js');
// import arrayLinksValidate from './testData.spec.js';
const path = require('path');
const cwd = process.cwd();
const myFunction =require('../src/md-Links/utils1.js');
// import  getLinks from './utils1.js'


const ruta3 = 'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba';
const ruta4 = './test/prueba/texto';

describe('pathAbsolute es funcion o no', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction.pathAbsolute).toBe('function');
  });
});
describe('Testing para saber si la ruta es absoluta', () => {
  it('debería dar true si es ruta absoluta', () => {
    
    expect(myFunction.pathAbsolute(path.join(cwd, './src'))).toBe(true);
  });
it('debería dar false si es ruta relativa', () => {
  expect(myFunction.pathAbsolute('../prueba/yesenia.md')).toBe(false);
   });
});


describe('Convertir ruta relativa a ruta absoluta', () => {
it('transAbsolute debería ser una función', () => {
  expect(typeof myFunction.transAbsolute).toBe('function');
   });
it('debería convertir a ruta absoluta', () => {
  // console.log(transAbsolute('..\PRUEBA2.md'));
  expect(myFunction.transAbsolute('.\\test\\prueba\\yesenia.md')).toBe('C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md');
  });
});

describe('Testing para saber si la ruta es directorio', () => {
  it('isDirectory debe ser una función', () => {
    expect(typeof myFunction.pathIsDirectory).toBe('function');
  });
  it('isDirectory debería dar true si es directorio', () => {
    expect(myFunction.pathIsDirectory('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba')).toBe(true);
  });
  it('isDirectory debería dar false si es archivo', () => {
    expect(myFunction.pathIsDirectory('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md')).toBe(false);
  });
});

describe('Testing para saber si es archivo', () => {
  it('isFile debería ser una función', () => {
    expect(typeof myFunction.pathIsFile).toBe('function');
  });
  it('isFile debería dar true si es un archivo', () => {
    expect(myFunction.pathIsFile('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md')).toBe(true);
  });
});

describe('Testing para saber cual es la extensión del archivo es', () => {
  it('typeMarkdown debería ser un función', () => {
    expect(typeof myFunction.typeMarkdown).toBe('function');
  });
  it('typeMarkdown debe identificar la extensión de esta ruta: .md', () => {
    expect(myFunction.typeMarkdown('C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md')).toBe('.md');
  });
});
describe('Testing para saber cual es la extensión del archivo es', () => {
  it('typeMarkdown debería ser un función', () => {
    expect(typeof myFunction.typeMarkdown).toBe('function');
  });
  it('typeMarkdown debe identificar la extensión de esta ruta: .md', () => {
    expect(myFunction.typeMarkdown('prueba1.md')).toBe('.md');
  });
  it('typeMarkdown debe identificar la extensión de esta ruta: .md', () => {
    expect(myFunction.typeMarkdown('README.md')).toBe('.md');
  });
  it('typeMarkdown debe identificar la extensión de esta ruta: .js', () => {
    expect(myFunction.typeMarkdown('index.js')).toBe('.js');
  });
});

describe('getFilesAndDirectories', () => {
  it('should be a function', () => {
    expect(typeof myFunction.getFilesAndDirectories).toBe('function');
  });
  it('should return object links', () => {
    expect(myFunction.getFilesAndDirectories(ruta3)).toEqual([
      'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\Documento',
      'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\texto',
      'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\Varios',
      'C:\\Users\\HP\\MD-Links\\LIM013-fe-md-links\\test\\prueba\\yesenia.md'
    ]);
  });


describe('getFiles', () => {
  it('should be a function', () => {
    expect(typeof myFunction.getFiles).toBe('function');
  });
  it('should return all files', () => {
    expect(myFunction.getFiles('prueba1.md')).toEqual([ 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md' ]);
  });
  it('should return all files', () => {
    expect(myFunction.getFiles('README.md')).toEqual([ 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\README.md' ]);
  });

  it('should return all files', () => {
    expect(myFunction.getFiles(ruta4)).toEqual([]);
  });
});
});


describe('getlinks', () => {
  it('should be a function', () => {
    expect(typeof myFunction.getLinks).toBe('function');
  });
  it('should return object links', () => {
    expect(myFunction.getLinks('./test/prueba/Documento/prueba4.md')).toEqual([
      {
        href: 'https://www.figma.com/',
        text: 'https://www.figma.com/',
        file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\test\\prueba\\Documento\\prueba4.md'
      }]);
  });
  it('should return object links', () => {
    expect(myFunction.getLinks(['./test/prueba/varios/pruebaVarios.md'][0])).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)',
        text: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)',
        file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\test\\prueba\\varios\\pruebaVarios.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
        text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
        file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\test\\prueba\\varios\\pruebaVarios.md'
      }]);
  });
});

describe('Validar los Link de un archivo .MD', () => {
  it('is a function: optionValidate', () => {
      expect(typeof myFunction.optionValidate).toBe('function');
  });
  it('Links encontrados - retornar un array:  file, href, status, statusMessage y text', 
  () => {
      return myFunction
          .optionValidate('./test/prueba/yesenia.md')
          .then((resp) => {
              expect(resp).toEqual(data.arrayLinksValidate);
              
         
          });
  });
});

// describe('optionValidate', () => {
//   it('Debería ser una función', () => {
//     expect(typeof myFunction.optionValidate).toBe('function');
//   });
//   it('debería retornar un array de objetos con las propiedades href, text, file, status, statusText', (done) => {
//     myFunction
//     .optionValidate(data.arrayLinks)
//     .then((resolve) => {
//        expect(resolve).toEqual(data.arrayLinksValidate);
//      done();
//     });
//   });
//   it('Debería retornar FAIL si la URL no es válida', (done) => {
//        myFunction
//       .optionValidate(data.error).then((resolve) => {
//       expect(resolve).toEqual(data.rep);
//       done();
//     });
//   }); 
// });