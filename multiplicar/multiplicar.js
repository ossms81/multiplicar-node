const fs = require('fs'); // require de una librería que viene con node
//const express = require('express'); // require de una librería de node que hay que instalar
//const myfile = require('./myfile'); // requiere de archivos nuestros
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        let nombreArchivo = `tabla-${base}-al-${limite}.txt`;
        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
        });

    })

};

let listarTabla = (base, limite) => {

    console.log('========================'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('========================'.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}