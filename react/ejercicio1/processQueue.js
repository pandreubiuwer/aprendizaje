export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
  
   
    for (const element of queue) {
      if (typeof element === 'function') {
         console.log(queue)
        finalState = element(finalState);  // Aplica la función al estado actual
      } else {
        finalState = element;  // Establece el estado al número dado
      }
    }
  
    return finalState;
  }
  