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

  const arrayLinks =
[
    {
      href: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      text: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/%C3%81ngela_Ruiz_Robles', 
      text: 'https://es.wikipedia.org/wiki/%C3%81ngela_Ruiz_Robles', 
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Grace_Murray_Hopper',
      text: 'https://es.wikipedia.org/wiki/Grace_Murray_Hopper',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Hedy_Lamarr',
      text: 'https://es.wikipedia.org/wiki/Hedy_Lamarr',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Mary_Allen_Wilkes',
      text: 'https://es.wikipedia.org/wiki/Mary_Allen_Wilkes',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Katherine_Johnson',
      text: 'https://es.wikipedia.org/wiki/Katherine_Johnson',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Steve_Shirley',
      text: 'https://es.wikipedia.org/wiki/Steve_Shirley',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)',
      text: 'https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: '#1-Estudiante-de-Laboratoria',
      text: '#1-Estudiante-de-Laboratoria',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    },
    {
      href: '#1-Estudiante-de-Laboratoria',
      text: '#1-Estudiante-de-Laboratoria',
      file: 'C:\\Users\\HP\\MD-links\\LIM013-fe-md-links\\prueba1.md'
    }
  ]