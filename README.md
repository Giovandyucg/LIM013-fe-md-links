# Markdown Links 📄🔗


## About md-Links

Our options:

- Validate Links(OK, FAIL)
- Stats Links(total, unique, broken)



## Flow Chart 

-Our diagram simplifies us to understand with ease the complexity of the process that we will carry out to build our library.
   - Flow Charts.
   - Git hub projects.

### Flow Chart API 


![](src/image/diagrama api.png)

###  Flow Chart CLI


![](src/image/diagrama cli.png)


## How to install mdLinks?

- Install this library with this command: `npm install giovandyyg-md-links `

### API `mdLinks(path, opts)`

#### Example of how to use it:

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

```js

Remember that to use this library you need to insert:

👉 md-links <path-to-file> [valid arguments]
*****************Valid Arguments*****************
⭐md-links <path-to-file> --validate   --stats
⭐md-links <path-to-file> --stats      --validate
⭐md-links <path-to-file> -v   -s
⭐md-links <path-to-file> -s   -v
⭐md-links <path-to-file> --validate  -v
⭐md-links <path-to-file> --stats     -s
************************************************* 

```

---

### Learning goals
- [⭐] Entender la diferencia entre expression y statements.
- [⭐] Entender el uso de bucles (for | forEach).
- [⭐] Manipular arrays (filter | map | sort | reduce).
- [⭐] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [⭐] Utilizar linter para seguir buenas prácticas (ESLINT)

### Javascript
- [⭐] Uso de callbacks
- [⭐] Consumo de Promesas
- [⭐] Creacion de Promesas
- [⭐] Modulos de Js
- [⭐] Recursión

### Node
- [⭐] Sistema de archivos
- [⭐] package.json
- [⭐] crear modules
- [⭐] Instalar y usar modules
- [⭐] npm scripts
- [⭐] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [⭐] Testeo de tus funciones
- [⭐] Testeo asíncrono
- [⭐] Uso de librerias de Mock
- [⭐] Mocks manuales
- [⭐] Testeo para multiples Sistemas Operativos

### Git y Github
* [⭐] Uso de comandos de git (add | commit | pull | status | push)
* [⭐] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* ⭐ Colaboración en Github (branches | pull requests | |tags)
* [⭐] Organización en Github (projects | issues | labels | milestones)

### Buenas prácticas de desarrollo
- [⭐] Modularización
- [⭐] Nomenclatura / Semántica

***

## Pistas / Tips


#### Instalacion desde GitHub

Para que el módulo sea instalable desde GitHub solo tiene que:

- Estar en un repo público de GitHub
- Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

Por ejemplo, el [`course-parser`](https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/course-parser`.

### Implementación

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas,
tanto usando librerías como implementando en Vanilla JS.

Por poner un ejemplo, el _parseado_ (análisis) del markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

- Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
  que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
  los links.
- Siguiendo otro camino completamente, podríamos usar
  [expresiones regulares (`RegExp`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
- También podríamos usar una combinación de varios _módulos_ (podría ser válido
  transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los link con una librería de DOM como [JSDOM](https://github.com/jsdom/jsdom)
  o [Cheerio](https://github.com/cheeriojs/cheerio) entre otras).
- Usando un _custom renderer_ de [marked](https://github.com/markedjs/marked)
  (`new marked.Renderer()`).



### Recursos necesarios

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Promise](https://javascript.info/promise-basics)
- [Comprendiendo Promesas en Js](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- [Pill de recursión - video](https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s)
- [Pill de recursión - repositorio](https://github.com/merunga/pildora-recursion)
- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)












































