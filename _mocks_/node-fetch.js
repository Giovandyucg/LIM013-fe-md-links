const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();
Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch
});


fetchMock
.mock('https://es.wikipedia.org/wiki/Ada_Lovelace', 200)
.mock('https://es.wikipedia.org/wiki/Carol_Shaw', 200)
.mock('#1-Estudiante-de-Laboratoria', 'no status')

module.exports = fetchMock;