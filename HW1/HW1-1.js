var nums = [4, 9, 5, 3, 8]

transform = (numbers) => {
  newArray = []
  sortedArray = numbers.sort()
  sortedArray.forEach(iteration => {
    squareNumber = iteration*iteration
    newArray.push(squareNumber)
  });
  return newArray
}

sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)