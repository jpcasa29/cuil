let process = require('process');
let calcularCuil = require("./cuil");

let comando = process.argv[2];
let sexo = process.argv[3];
let dni = process.argv[4];

switch(comando){
    case '?':
        console.log(' ');
        console.log('Hola :) !!! en este archivo podes calcular el CUIL de una persona');
        console.log('1) Primero escribir el comando Calcular');
        console.log('2) Seguido de un espacio y el sexo de la persona "F" o "M" (no olvidar las comillas)');
        console.log('3) Seguido de un espacio colocar el numero de DNI');
        console.log(' ');
        break;
    case 'Calcular':
        console.log(' ');
        console.log(calcularCuil.cuil(sexo,dni))
        console.log(' ');
        break;
    case undefined:
        console.log(' ');
        console.log('Hey! no me enviaste ningún comando');
        console.log(' ');
        console.log('Podes consultar los comandos con "?"');
        console.log(' ');
        break;
    default:
        console.log(' ');
        console.log('Consulta los comandos con "?"');
        console.log(' ');
        }



