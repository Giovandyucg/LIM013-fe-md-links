// const mdLinks =require('../src/md-Links/mdLinks');
// const myFunction = require('../src/md-Links/mdLinks.js');
import {mdLinks} from '../src/md-Links/mdLinks.js'
// console.log(mdLinks);
const path = require('path');
const cwd = process.cwd();

describe('mdLinks', () => {
  it('Es una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('retorna un array de objeto con trs propiedades', () => {
   
    expect(mdLinks('test/prueba/Documento/prueba4.md', { validate: false })).resolves.toEqual([{  'file': path.join(cwd,'test/prueba/Documento/prueba4.md'),'href': 'https://www.figma.com/', 'text': 'https://www.figma.com/' }]);
  });
  it('un array de objetos con 5 propiedades', () => {
   
    expect(mdLinks('test/prueba/Documento/prueba4.md', { validate: true })).resolves.toEqual([{ 'file':  path.join(cwd,'test/prueba/Documento/prueba4.md'), 'href': 'https://www.figma.com/', 'status': 200, 'statusText': 'OK', 'text': 'https://www.figma.com/' }]);
  });
});

