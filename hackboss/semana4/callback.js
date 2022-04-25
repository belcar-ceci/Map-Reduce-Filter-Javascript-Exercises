'use strict';

const ejecutarCincoveces = (callbackFunction) => {
    console.log(callbackFunction);

    for (let i = 1; i <= 5; i++) {
        callbackFunction(i, 2);
    }
};

const suma = (a, b) => {
    console.log(a +b)
}

ejecutarCincoveces(suma);//undefine

ejecutarCincoveces(() => {
    console.log("hey");
});

ejecutarCincoveces(() => {
    console.log("tercer callback");
});


function solicitudServidor(consulta, callback){
  setTimeout(function(){
    const respuesta = consulta + "lleno!";
    callback(respuesta);
  },1000);
}

function obtenerResultados(resultados){
  console.log("Respuesta del servidor: " + resultados);
}

solicitudServidor("El vaso está medio  ", obtenerResultados);

//Resultado en la consola luego de 5 segundos:
// El vaso está medio lleno!