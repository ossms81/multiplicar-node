const opts = {
    base: {
        demand: true, // requierido
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 // valor por defecto
    }
}

// Cuando el argumento del require no lleva './' es un paquete
const argv = require('yargs')
    .command(
        'listar',
        'Imprime en consola la tabla de multiplicar', {
            opts
        })
    .command(
        'crear',
        'Genera un archivo con la tabla de multiplicar', {
            opts
        })
    .argv;

module.exports = {
    argv
}