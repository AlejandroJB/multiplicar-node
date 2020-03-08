const { argumento } = require('./config/yargs.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let command = argumento._[0];

switch (command) {
    case 'listar':
        listarTabla(argumento.base, argumento.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argumento.base)
            .then(archivo => console.log(`File ${archivo} has been saved!`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


//let argumento2 = process.argv;

//console.log('Base: ' + argumento.base);
//console.log(argumento2);
//console.log('Limite: ' + argumento.limite);


//let parametro = argumento[2];
//let base = parametro.split('=')[1];