import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
  /*
En el contexto de eventos de JavaScript, target se refiere al elemento del DOM que
 ha disparado el evento. En el caso de un evento de entrada, como un cambio en un campo
  de formulario, target sería el propio elemento de entrada.

e.target: Accede al elemento que disparó el evento. En un formulario, sería el campo de
         entrada donde el usuario está escribiendo.
e.target.value: Obtiene el valor actual del campo de entrada. Es decir, lo que el usuario
                 ha escrito o modificado en ese campo.


Por ejemplo, en un campo de formulario para el nombre, cuando el usuario escribe "Ana", e.target
 sería el elemento de entrada del nombre, y e.target.value sería "Ana". Esto permite que el código
  reaccione y actualice el estado en React de acuerdo con los cambios hechos por el usuario, 
  manteniendo así la interfaz de usuario sincronizada con los datos.











  */

  return (
    <>
      <label>
        Nombre:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellido:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
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
