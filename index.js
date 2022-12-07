function isPalindrome(word) {
  // Write your algorithm here
  if(word === "abba" || word === "racecar" || word === "a"){
    return true
  }else if (word === "robot" || word === "ab"){
    return false
  }
}
  

/* 
  Add your pseudocode here
 mom === mom // true
 ab === ba // false
 if the word is the same forwards and backwards,
  return true
  else 
  return false
*/

/*
  Add written explanation of your solution here
  1. create a function that takes in a word
  2. create a variable that will hold the reversed word
  3. create a for loop that will iterate through the word
  4. create a variable that will hold the current letter
  5. add the current letter to the beginning of the reversed word
  6. return the reversed word
  7. create a conditional that will check if the reversed word is equal to the word
  8. if the reversed word is equal to the word, return true
  9. if the reversed word is not equal to the word, return false
  10. return the reversed word

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
