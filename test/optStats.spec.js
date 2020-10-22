
import {linksStats, uniqueStats, brokenStats} from '../src/stats.js';

const prueba = [
    {
      href: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      text: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/%C3%81ngela_Ruiz_Robles',
      text: 'https://es.wikipedia.org/wiki/%C3%81ngela_Ruiz_Rob',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Grace_Murray_Hopper',
      text: 'https://es.wikipedia.org/wiki/Grace_Murray_Hopper',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Hedy_Lamarr',
      text: 'https://es.wikipedia.org/wiki/Hedy_Lamarr',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Mary_Allen_Wilkes',
      text: 'https://es.wikipedia.org/wiki/Mary_Allen_Wilkes',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Katherine_Johnson',
      text: 'https://es.wikipedia.org/wiki/Katherine_Johnson',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Steve_Shirley',
      text: 'https://es.wikipedia.org/wiki/Steve_Shirley',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)',
      text: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(c',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 200,
      statusText: 'OK'
    },
    {
      href: '#1-Estudiante-de-Laboratoria',
      text: '#1-Estudiante-de-Laboratoria',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 500,
      statusText: 'FAIL'
    },
    {
      href: '#1-Estudiante-de-Laboratoria',
      text: '#1-Estudiante-de-Laboratoria',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md',
      status: 500,
      statusText: 'FAIL'
    }
  ];

  // const salida =`
  // Total: 10
  // Unique: 10`;
   
  // const salida1= `
  //   Total: 10
  //   Unique: 10
  //   Broken: 1`;
  
  describe('linksStats', () => {
    it('Debería ser una función', () => {
        expect(typeof linksStats).toBe('function');
    });
    it('Debería retornar los links únicos de mi array de objetos', () => {
        expect(linksStats(prueba)).toEqual(11);
    });
});
describe('uniqueStats', () => {
    it('Debería ser una función', () => {
        expect(typeof uniqueStats).toBe('function');
    });
    it('Debería retornar el total de links de mi array de objetos', () => {
        expect(uniqueStats(prueba)).toEqual(10);
    });
});
describe('brokenStats', () => {
    it('Debería ser una función', () => {
        expect(typeof brokenStats).toBe('function');
    });
    it('Debería retornar los links rotos de mi array de objetos', () => {
        expect(brokenStats(prueba)).toBe(2);
    });
});