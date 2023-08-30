class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push(value);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[this.queue.length - 1];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    print() {
      return console.log(this.queue);
    }
  }
  const Colaoriginal = [1,2.3,4.2,2.5,2,5.1];
  console.log ("Cola original",Colaoriginal)

  function invertirCola(cola) {
    const colaInvertida = [];
  
    for (let i = cola.length - 1; i >= 0; i--) {
      colaInvertida.push(cola[i]);
    }
  
    return colaInvertida;
  }
  
  const colaInvertida = invertirCola(Colaoriginal);
  
  console.log("Cola invertida:",colaInvertida);
 
  

