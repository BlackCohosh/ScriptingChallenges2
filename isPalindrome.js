// Write your code below
//Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
const isPalindrom = (str) => {
    var forwardStr = '';
    var reverseStr = '';
    var palindromeCheck = '';

    for (let i = 0; i < str.length; i ++) {
        forwardStr += str[i];
    }
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    if (forwardStr === reverseStr){
        palindromeCheck = true
    } else { palindromeCheck = false}

   // console.log(forwardStr)
   // console.log(reverseStr)
    console.log(palindromeCheck)
}

isPalindrom('racecar')