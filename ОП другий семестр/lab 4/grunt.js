class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    const newE = { item, priority };
    this.queue.push(newE);
  }

  dequeue(type) {
    if (type === 'oldest') {
      return this.queue.shift();
    }
    if (type === 'newest') {
      return this.queue.pop();
    }
    if (type === 'highest') {
      let highestIndex = 0;
      let highestPriority = this.queue[0].priority;

      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority > highestPriority) {
          highestPriority = this.queue[i].priority;
          highestIndex = i;
        }
      }
      return this.queue.splice(highestIndex, 1)[0];
    }
    if (type === 'lowest') {
      let lowestIndex = 0;
      let lowestPriority = this.queue[0].priority;

      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority < lowestPriority) {
          lowestPriority = this.queue[i].priority;
          lowestIndex = i;
        }
      }
      return this.queue.splice(lowestIndex, 1)[0];
    }
  }
  peek(type) {
    if (type === 'oldest') {
      return this.queue[0];
    }
    if (type === 'newest') {
      return this.queue[this.queue.length - 1];
    }
    if (type === 'highest') {
      let highestIndex = 0;
      let highestPriority = this.queue[0].priority;

      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority > highestPriority) {
          highestPriority = this.queue[i].priority;
          highestIndex = i;
        }
      }
      return this.queue[highestIndex]; 
    }
    if (type === 'lowest') {
      let lowestIndex = 0;
      let lowestPriority = this.queue[0].priority;

      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority < lowestPriority) {
          lowestPriority = this.queue[i].priority;
          lowestIndex = i;
        }
      }
      return this.queue[lowestIndex]; 
    }

  }
}
const myQueue = new PriorityQueue() 
myQueue.enqueue('Олег' , 5) 
 myQueue.enqueue('Степан' , 100) 
  myQueue.enqueue('Андрій' , 7) 
   myQueue.enqueue('Олександр' , 1) 
console.log(myQueue.dequeue('highest')) 