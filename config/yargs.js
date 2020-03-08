const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argumento = require('yargs') //al no llevar ./ estamos indicando que proviene de un paquete en este caso dentro de node_modules
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argumento
}


//without options object

/*const argumento = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;

    
    module.exports = {
    argumento
}*/