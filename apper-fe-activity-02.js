class Queue {

    constructor(value)  {
      this.value = [];
    }
  
    push(value){
      //guard: if input is not a string
      if (typeof(value) == 'string'){
        this.value.push(value);
      } else 
        console.log('Invalid input.');
    }
  
    pop(){
      //code: remove first item
      //guard: if its empty
      if (this.value.length==0){
        console.log('Queue is empty.')
      } else {
        this.value.shift();
      }
    }


    check(){
      console.log(this.value);
    }
  }
  
  const my_queue = new Queue()
  my_queue.push('Milk')
  my_queue.push('Eggs')
  my_queue.check() // ['Milk', 'Eggs']
  my_queue.pop()
  my_queue.check()            // ['Eggs']
  my_queue.pop()
  my_queue.check()            // []
  my_queue.pop() //Queue is empty.