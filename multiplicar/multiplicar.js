const fileSystem = require('fs');
const colors = require('colors');

let listarTabla = async(base, limite) => {

    if (!Number(base)) {

        throw `El valor ${base} no es un numero`;

    }

    let data = '';


    console.log('==========='.green);
    console.log(`tabla del ${base}`.green);
    console.log('==========='.green);

    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${i} = ${base * i}\n`;

    }

    return data;

}


let crearArchivo = async(base) => {

    if (!Number(base)) {

        throw `El valor ${base} no es un numero`;

    }

    let data = new Uint8Array(Buffer.from(''));

    for (let i = 1; i <= 10; i++) {

        data += `${base} * ${i} = ${base * i}\n`;
        //data = data + `${base} * ${i} = ${base * i}\n`;
        //data = `${data}${base} * ${i} = ${base * i}\n`;

    }

    fileSystem.writeFile(`tablas\\tabla-${base}.txt`, data, (err) => {

        if (err) throw err;

    });

    return `tabla-${base}.txt`.green;

}

module.exports = {
    crearArchivo,
    listarTabla
}