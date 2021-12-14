const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

/** Esto se reemplaza con Yargs */
/*
console.log(process.argv)
/* Extraer base - Destructuracion de Arrays */
/*
const [,,arg3  = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
//console.log(arg3)
console.log(base);
*/


//console.log(process.argv);
console.log(argv);

//console.log('base: yargs', argv.base); // o console.log('base: yargs', argv.b); 


//const base = 6;

crearArchivo(argv.base, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
