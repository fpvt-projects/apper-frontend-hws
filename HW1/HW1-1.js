//ARRAY OF NUMBERS
var nums = [4, 9, 5, 3, 8, 10]

//TRANSFORM FUNCTION
transform = (numbers) => {
  newArray = []
  sortedArray = numbers.sort(function(a, b) {
    return a - b
  })
  sortedArray.forEach(iteration => {
    squareNumber = iteration*iteration
    newArray.push(squareNumber)
  });
  return newArray
}

//TEST FUNCTION WITH ARRAY
sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)