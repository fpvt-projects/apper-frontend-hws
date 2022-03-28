var nums = [4, 9, 5, 3, 8,10]

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

sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)