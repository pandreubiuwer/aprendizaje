const [position, setPosition] = useState({ x: 0, y: 0 });
position.x = 5;
/*
ahora estas cambiando el estado del objeto 
*/





import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({ //estabelce la posicion y el metodo para cambiarla 
    x: 0,
    y: 0
  }); //y esto no es un obgeto sin nombre toma position como nombre del obgeto 
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
/*

onPointerMove: es un evento en React que se dispara cada vez que 
el puntero se mueve sobre el elemento al cual está asociado

antes de esto hay que explicar e, es un obgeto de evento se declara asi y se le pueden 
pasar funciones directamente o eventos y esto se usa para por ejemplo usar los 
metdos relacionados como .clientx o .type aqui un ejemplo
*/

document.addEventListener('mousemove', evento => {
    console.log(`Mouse en X: ${evento.clientX}, Y: ${evento.clientY}`);
  });
  
  

  
/*
La función que recibe onPointerMove toma un evento/funcion e como argumento 
y utiliza setPosition para actualizar el estado position"que es lo del primer objeto" con la posición 
actual del cursor (clientX y clientY).

Uso de clientX y clientY:
e.clientX y e.clientY son propiedades del objeto evento e que
 indican la posición horizontal (x) y vertical (y) del puntero 
 (cursor del ratón) respecto al área visible de la página (viewport).
*/



      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}




