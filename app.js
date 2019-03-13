const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.b, argv.l);
        break;

    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then((archivo) => console.log('Archivo creado: ' + colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}