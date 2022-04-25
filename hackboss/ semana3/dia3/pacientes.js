/**
 * Dado un array de booleanos, los true serán
 * pacientes infectados y los false serán pacientes sanos. Los pacientes
 * infectados, contagian a los que tengan a su izquierda y a su derecha
 *
 * EJEMPLO:
 * Si tenemos este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [true, true, true, true, false, true, true, true]
 *
 * EXTRA: Los pacientes infectados se curan
 *
 * EJEMPLO:
 * Si recibe este array de pacientes:
 * [true, false, true, false, false, false, true, true]
 *
 * Deberá retornar este:
 * [false, true, false, true, false, true, false, false]
 *
 */

"use strict";

const pacientes = [true, false, true, false, false, false, true, true];
const pacientesInfectados = [];



/*for (let dataPacientes = 0; pacientes.length; dataPacientes++){
    if (pacientes[dataPacientes] === true) {
        console.log("Infectados " + pacientes[dataPacientes + 1])
    }
}*/

for (let i = 0; i < pacientes.length; i++){
    const paciente = pacientes[i];

    if(pacientesInfectados[i] === undefined){
    pacientesInfectados[i] = paciente;
    }
 

    
    if (paciente) {
        if (i === 0) {
            pacientesInfectados[i + 1] = true;
            //pacientesCurados[i + 1] = false;

        } else if (i === pacientes.length - 1) {
            pacientesInfectados[i - 1] = true;
            //pacientesCurados[i - 1] = false;
           
        } else {
            pacientesInfectados[i - 1] = true;
            pacientesInfectados[i + 1] = true;
            
            //pacientesCurados[i + 1] = false;
            //pacientesCurados[i - 1] = false;
            
        }
    }
}
//este ejemplo cambia el array de pacientesInfectados
//[false, true, false, true, false, true, false, false]
for (let i = 0; i < pacientesInfectados.length; i++){
    if (pacientes[i]) {
        pacientesInfectados[i] = false;
    }
}
console.log(pacientesInfectados);
