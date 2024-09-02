/*

este codigo de aqui muestra un formulario pequeño que actualiza automaticamnete
los datos nada mas escribimos 
*/

import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });
/*
estas funciones de actualizar son asi por spread.js esto hace que no se borren los datos
del obgeto si no que se cambien 

1.function handleFirstNameChange(e) - Esta es la declaración de una función que se activa 
cuando el usuario modifica el valor del campo de entrada del nombre. El e es un objeto de
 evento que proporciona React, que contiene información sobre el evento de cambio.

2.setPerson({ ... }) - Aquí, setPerson es una función proporcionada por el hook useState de 
React. Esta función se utiliza para actualizar el estado del componente. En este caso, el 
estado se llama person y almacena información sobre una persona, incluyendo su nombre, apellido
 y correo electrónico.

3....person - Esta es la sintaxis de propagación de JavaScript (spread syntax). Lo que hace 
es tomar todas las propiedades y valores existentes del objeto person y copiarlos en un nuevo 
objeto. Es importante usar esto aquí porque queremos mantener las otras propiedades (lastName 
y email) inalteradas mientras actualizamos el firstName.

4.firstName: e.target.value - Esto establece una nueva propiedad firstName en el nuevo objeto,
 donde el valor es igual al valor actual del campo de entrada (accesible a través de e.target.value).
 Si el objeto person ya tiene una propiedad firstName, este valor la sobrescribirá.

 */
  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
      <label>
        Nombre:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Apellido:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
