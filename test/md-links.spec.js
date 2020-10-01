/* eslint-disable import/no-unresolved */
// const path = require('path');
// import { isAbsolutePath } from '../src/index.js';

// describe('Testing para saber si la ruta es absoluta', () => {
//     it('debería dar true si es ruta absoluta', () => {
      
//       expect(isAbsolutePath(isAbsolutePath(,))).toBe(true);
//     });
  
//     it('debería dar false si es ruta relativa', () => {
//       expect(isAbsolutePath('../prueba/yesenia.md')).toBe(false);
//     });
//   });
import  suma  from '../src/md-Links/index.js';

describe('sumar 1+2 es igual a 3', () => {
  it('is a function', () => {
    expect(typeof suma).toBe('function');
  });

  it('returns `3`', () => {
    expect(suma(1,2)).toBe(3);
  })
});

