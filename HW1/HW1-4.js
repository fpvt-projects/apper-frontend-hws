// wordsArray = ['racecar', 'deified', 'radar', 'uwu', 'Macbook', 'Windows']

isPalindrome = (words) => {
  // words.forEach(given => {
  //   for(i = 0; i < given.length; i++){
  //     palindrome = given.split("").reverse().join("")
  //   }
  //   if(given === palindrome){
  //     return true
  //   } else {
  //     return false
  //   }
  // });
    palindrome = words.split("").reverse().join("")
     if(words === palindrome){
      return true
    } else {
      return false
    }
}

palindromeResult = isPalindrome("racecar")
console.log(palindromeResult)

palindromeResult = isPalindrome("radar")
console.log(palindromeResult)

palindromeResult = isPalindrome("Windows")
console.log(palindromeResult)

palindromeResult = isPalindrome("Hannah")
console.log(palindromeResult)
