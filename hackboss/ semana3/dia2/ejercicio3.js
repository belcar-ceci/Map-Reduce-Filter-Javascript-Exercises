'use strict';

/*const profundidadPozo = 16;

let dias = 0;
let pasos = 0;*/
/** Un caracol en un pozo sube 7 pasos por el día y baja 2 por la noche.
 * Dada la profundidad del pozo (en pasos), haya cuantos días tarda el caracol en subirlo
 *
 * EJEMPLO: Si profundidadPozo es 31, el número de días debería ser 6
 * Día 1: 7-2=5
 * Día 2: 5+7-2=10
 * Día 3: 10+7-2=15
 * Día 4: 15+7-2=20
 * Día 5: 20+7-2=25
 * Día 6: 25+7=32
 *
 * En el día seis consigue subir el pozo durante el día, antes de llegar
 * a la noche
 *
 * PISTA: Puedes usar un bucle para ir viendo lo que recorre el caracol cada
 * día, y hacer un break cuando llegue a la profundidad del pozo
 */
//console.log("👾 ");

/*function main() {
    let test = parseInt(10);
    day = 0;

    for (; test > 0;){
        day = + 1;

        test = test - 7
        if (test > 0) {
            test = test + 2;
        }
    }
    console.log(day);
}
 */

/*function main() {
    const profundidad = 16
    
    

    for (let i = 0; profundidad > 0; i++){
        profundidad -= 7
        if (profundidad > 0) {
            profundidad += 2
            
        }
        console.log(i);
        
    }

}*/

/*function main() {
    var profundidade = parseInt(readLine(), 10);
   // seu código vai aqui, rsrs exclusivo pra Br
    for (i = 0; profundidade > 0; i++) {
        profundidade -= 7
        if (profundidade > 0) {
            profundidade += 2
        }
    }
    console.log(i);
} */


 const profundidad = 16
    let dias = 0;

    
for (let pasos = 0; ; pasos = pasos - 2){
    dias++;
    pasos += 7;

    //llego arriba del pozo

    if (pasos >= profundidad) {
        break;
    }


}
console.log(` EL SNILL ${dias }`);