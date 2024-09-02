
//La palabra clave catch en JavaScript se usa para 
//capturar errores que ocurren en operaciones asincrónicas o 
//en bloques de código que podrían lanzar excepciones
algunaFuncionQueDevuelvePromesa()
  .then(resultado => {
    // Código para manejar el resultado exitoso.
    console.log(resultado);
  })
  .catch(error => {
    // Código para manejar el error.
    console.error("Ocurrió un error:", error);
  });




  //ahora con un try cach

  try {
    // Intenta hacer algo que podría fallar.
    algunaFuncion();
  } catch (error) {
    // Maneja cualquier error que ocurra en el bloque try.
    console.error("Se capturó un error:", error);
  }
  