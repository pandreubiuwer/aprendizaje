const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Nana azul',
      city: 'Hamburgo',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });


//Si quisieras actualizar person.artwork.city, está claro cómo hacerlo con la mutación:

person.artwork.city = 'Nueva Delhi';


/*
Pero en React, ¡se trata el estado como inmutable! Para cambiar la «ciudad», primero tendrías 
que producir el nuevo objeto «artwork» (pre-poblado con los datos de la anterior), y luego 
producir el nuevo objeto «person» que apunta a la nueva «artwork»:
*/
const nextArtwork = { ...person.artwork, city: 'Nueva Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);

//O, escrito como una sola llamada a la función:

setPerson({
    ...person, // Copia todas las propiedades de 'person' al nuevo objeto.
    artwork: { // Inicia la actualización del objeto 'artwork'.
      ...person.artwork, // Copia todas las propiedades del 'artwork' actual al nuevo objeto 'artwork'.
      city: 'Nueva Delhi' // Establece la nueva 'city', sobrescribiendo la anterior si existe.
    }
  });
  











