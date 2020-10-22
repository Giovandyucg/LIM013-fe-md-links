

// const comprobar =require('../src/md-Links/utils1.js');
// const { optionValidate } = require ('../src/md-Links/utils1.js');
import {optionValidate} from '../src/md-Links/utils1.js';
import fetchMock from'../_mocks_/node-fetch.js';
 fetchMock
.mock('https://es.wikipedia.org/wiki/Ada_Lovelace', 200, { overwriteRoutes: false })
.mock('https://es.wikipedia.org/wiki/Carol_Shaw', 200,{ overwriteRoutes: false })
.mock('#1-Estudiante-de-Laboratoria', 'no status',{ overwriteRoutes: false })


// import { optionValidate } from './utils1.js'

describe ('Validar los Links', () => {
  const input = './prueba1.md';
  const output = [
    {
      href: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      text: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      file: './prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      file: './prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: '#1-Estudiante-de-Laboratoria',
      text: '#1-Estudiante-de-Laboratoria',
      file: './prueba1.md',
      status: 'no status',
      statusText: 'FAIL'
    },
  ];
  it ('Debe verificar los links y me va a devolver su href, text, file, statusText, status', () => {
      optionValidate(input).then((resul) => {
          expect (resul).toEqual(output);
      })
      .catch((error) => done(error));
  });
});
