


// son funciones asincronas lo que significa que con la palabra reservada
// await genera asincronia en la funcion async
//siempre sevuelve una promesa 
async function esperarYContinuar(tiempo) {
    console.log("Inicio de la pausa");
    await new Promise(resolve => setTimeout(resolve, tiempo));
    console.log("Fin de la pausa");
}

esperarYContinuar(2000);  // Pausa de 2 segundos



/*

Función resolve
Propósito: Indica que la promesa ha completado su ejecución con éxito.
Uso Común: Pasar el valor resultante que quieres que la promesa proporcione 
a los manejadores .then() que se han adjuntado a ella.

*/
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos cargados con éxito");
        }, 2000);
    });
}

obtenerDatos().then(resultado => {
    console.log(resultado);  // Imprime "Datos cargados con éxito" después de 2 segundos
});

/*
Función reject
Propósito: Se utiliza para indicar que la promesa no se pudo cumplir debido a un error o problema.
Uso Común: Pasar el motivo o error por el que la promesa no se pudo resolver.
*/

function procesarOperacion(operacionValida) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (operacionValida) {
                resolve("Operación completada con éxito");
            } else {
                reject("Falló la operación: datos inválidos");
            }
        }, 2000);
    });
}

// Llamada a la función con un valor válido
procesarOperacion(true).then(resultado => {
    console.log(resultado); // Imprime: Operación completada con éxito
}).catch(error => {
    console.log(error);
});

// Llamada a la función con un valor no válido
procesarOperacion(false).then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error); // Imprime: Falló la operación: datos inválidos
});





/* 
aqui se crea la funcion fallar esta dentro devuelve el resultado de una promesa que pasa por parametro de 
una nueva funcion un resolve, reject  dentro settimeout es otra funcion que dentro tiene un reject 100%
lo que hace esto es que al pasar el tiempo devuelve reject para la funcion fallar

asi en la parte de aajo co nla funcion async prueba y camputa prueba el tiempo de fallar
y si tarde eso, salta un error que catch coge he inprime por consola 
*/ 
function fallar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error en la operación");
        }, 2000);
    });
}

async function probarYCapturar() {
    try {
        await fallar();
    } catch (error) {
        console.error("Capturado un error:", error);
    }
}

probarYCapturar();

