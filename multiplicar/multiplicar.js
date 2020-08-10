const fileSystem = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((response, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Revisar valores, al menos uno de ellos no es un numero`);
            return;
        }

        let resultado = `Base: ${base} con Limite: ${limite} \n`;

        for (let multiplier = 1; multiplier <= limite; multiplier++) {
            resultado += ` ${base} * ${multiplier} = ${ base * multiplier}\n`;
        }

        response(resultado);

    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } en la base NO es un numero`);
            return;
        } else if (!Number(limite)) {
            limite = 10;
        }

        let data = '';

        for (let multiplier = 1; multiplier <= limite; multiplier++) {
            data += ` ${base} * ${multiplier} = ${ base * multiplier}\n`;
        }

        fileSystem.writeFile(`./tablas/tabla-${ base }-al${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}