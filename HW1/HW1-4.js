wordsArray = ['racecar', 'deified', 'radar', 'uwu', 'Macbook', 'Windows']

isPalindrome = (words) => {
  words.forEach(given => {
    for(i = 0; i < given.length; i++){
      palindrome = given.split("").reverse().join("")
    }
    if(given === palindrome){
      console.log(given + ': true')
    } else {
      console.log(given + ': false')
    }
  });
}

isPalindrome(wordsArray)