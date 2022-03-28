const word = "helloworld"
vowel = ['a','e','i', 'o', 'u']
ret = []
convertToVowels = (words) => {
    givenWord = word.split("")
    for(var i = 0; i < givenWord.length; i += 1) {
        if(vowel.indexOf(givenWord[i]) > -1){
            ret.push(givenWord[i]);
        }
    }
    return ret.join('');
}

const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)