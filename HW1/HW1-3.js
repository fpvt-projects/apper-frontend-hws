//REVERSE FUNCTION
reverse = (words) => {
  reverseArray = []
  for(i = 0; i < words.length; i++){
    reverseArray.push(words.charAt(i))
  }
  joinWord = reverseArray.reverse()
  return joinWord.join('')
}

const reversedWord = reverse("joseph")
console.log(reversedWord)