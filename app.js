// Requiereds
const argv = require('./config/yargs').argv;

// const argv = require('yargs').argv; // Paquete de yargs


// const fileSystem = require('fs'); // -> Paquetes ya pre-instalados con nodejs
// const fileSystem = requiere('express'); -> Paquetes que alguien mas creo, se tienen que instalar
// const fileSystem = requiere('../path'); -> Archivos creados por mi y se encuentran en el proyecto

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = parseInt(argv.base);
let limite = parseInt(argv.l);

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        break;

    case 'crear':
        // console.log('crear');

        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));

        break;

    default:
        console.log('Comando no identificado');
}