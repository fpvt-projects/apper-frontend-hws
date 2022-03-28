//PALINDROME FUNCTION
isPalindrome = (words) => {
    palindrome = words.toLowerCase().split("").reverse().join("")
     if(words.toLowerCase() === palindrome){
      return true
    } else {
      return false
    }
}

palindromeResult = isPalindrome("racecar")
console.log(palindromeResult)

palindromeResult = isPalindrome("Radar")
console.log(palindromeResult)

palindromeResult = isPalindrome("Windows")
console.log(palindromeResult)

palindromeResult = isPalindrome("Hannah")
console.log(palindromeResult)
