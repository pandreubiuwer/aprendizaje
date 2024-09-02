
// son funciones asincronas lo que significa que con la palabra reservada
// await genera asincronia en la funcion async
//siempre sevuelve una promesa 
async function esperarYContinuar(tiempo) {
    console.log("Inicio de la pausa");
    await new Promise(resolve => setTimeout(resolve, tiempo));
    console.log("Fin de la pausa");
}

esperarYContinuar(2000);  // Pausa de 2 segundos

