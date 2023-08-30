function invertirPila(pila) {
    const pilaInvertida = [];
  
    for (let i = 0; i < pila.length; i++) {
      pilaInvertida.unshift(pila[i]);
    }
  
    return pilaInvertida;
  }
  
  const pila = [1, 2, 3, 4, 5];
  const pilaInvertida = invertirPila(pila);
  
  console.log("Pila original:",pila);
 
  
  console.log("Pila invertida:",pilaInvertida);
