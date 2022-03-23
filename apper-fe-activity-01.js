function fizzBuzz(x){
    if(x % 5 === 0 && x % 3 === 0){
      console.log("FizzBuzz")
    }
    else if(x % 3 === 0){
      console.log("Fizz")
    }
    else if(x % 5 === 0) {
      console.log("Buzz")
    }
    else {
      console.log("Not divisable by 3 or 5")
    }
  }
  
  fizzBuzz(15)