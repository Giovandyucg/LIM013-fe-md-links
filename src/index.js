// import path from 'path';
// import { enableFetchMocks } from 'jest-fetch-mock';
// import { validateLinks } from '../src/index';

// enableFetchMocks();

// describe('testing validate', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });
//   it('Should return status', () => {
//     fetch.mockResponseOnce('', { status: 2, statusText: "OK" });
//     validateLinks('testing-files/md-files3').then((res) => {
//       expect(res).toEqual([{ "file": path.join(process.cwd(), '/testing-files/md-files3/mdprueba.md'), "href": "https://sites.google.com/site/figuritasgeometricas/rombo", "status": 2, "statusText": "OK", "text": "Rombo" }]);
//     });
//   });
// });
// describe('testing validate', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });
//   it('Should return status fail', () => {
//     fetch.mockRejectOnce(() => validateLinks('testing-files\\md-files2').then((res) => Promise.reject(res.errorToRaise)));
//     validateLinks('testing-files/md-files2').then((res) => {
//       expect(res).toEqual([{ "file": path.join(process.cwd(), '/testing-files/md-files2/mdprueba2.md'), "href": "https://sites.com/site/figuritasgeometricas/circulo", "status": 500, "statusText": "FAIL", "text": "Circulo" }]);
//     });
//   });
// });


// primera hoja
// import fetchMock from 'jest-fetch-mock';

// fetchMock.enableMocks();


// const input =[
//     {
//       href: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
//       text: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
//       file: comprobar.transAbsolute('prueba1.md'),
//       status: 200,
//       statusText: 'OK'
//     },
//     {
//       href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
//       text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
//       file: comprobar.transAbsolute('prueba1.md'),
//       status: 200,
//       statusText: 'OK'
//     },
//     {
//       href: '#1-Estudiante-de-Laboratoria',
//       text: '#1-Estudiante-de-Laboratoria',
//       file: 
//       comprobar.transAbsolute('prueba1.md'),
//       status: 'no status',
//       statusText: 'FAIL'
//     },
//     {
//       href: '#1-Estudiante-de-Laboratoria',
//       text: '#1-Estudiante-de-Laboratoria',
//       file: 
//       comprobar.transAbsolute('prueba1.md'),
//       status: 'no status',
//       statusText: 'FAIL'
//     }
//   ];


//   const result =[
//     {
//       href: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
//       text: 'https://es.wikipedia.org/wiki/Ada_Lovelace',
//       file: comprobar.transAbsolute('prueba1.md'),
//     },
    
//     {
//       href: 'https://es.wikipedia.org/wiki/Carol_Shaw',
//       text: 'https://es.wikipedia.org/wiki/Carol_Shaw',
//       file: comprobar.transAbsolute('prueba1.md'),
//     },
//     {
//       href: '#1-Estudiante-de-Laboratoria',
//       text: '#1-Estudiante-de-Laboratoria',
//       file: comprobar.transAbsolute('prueba1.md'),
//     },
//     {
//       href: '#1-Estudiante-de-Laboratoria',
//       text: '#1-Estudiante-de-Laboratoria',
//       file: comprobar.transAbsolute('prueba1.md'),
//     }
//   ];

// //   describe('optionValidate', () => {
// //     it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', done => {
// //         comprobar.optionValidate(result).then((resolve) => {
// //         expect(resolve).toEqual(input); 
// //         done(); 
// //       });
// //     });
// //   }); 

// //    Test('optionValidate',()=> {
// //        return expect(Promise.resolve(comprobar.optionValidate(result))).resolves.tobe(input);
// //    })
// it ('Debe verificar los links y me va a devolver su href, text, file, statusText, status', () => {
//     comprobar.optionValidate(result).then((resul) => {
//         expect (resul).toEqual(input);
//     })
//     .catch((error) => done(error));
// });

