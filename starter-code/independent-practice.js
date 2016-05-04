/*
  1. Write a function `lengths` that accepts a single parameter as an argument, namely
  an array of strings. The function should return an array of numbers where each
  number is the length of the corresponding string.
*/

function lengths(sentence) {
  // have a placeholder array for word lengths
  var letterCount = [];
  // iterate through the sentence
  for(var i = 0; i < sentence.length; i++) {
  // determine length of each words
  var wordLength = sentence[i].length;
  // console.log("length of word is ", wordLength) TEST;
  // then push that length into the word lengths array
  letterCount.push(wordLength);
}
  // return an array of the word lengths
}

lengths(["hellooooo", "there", "person!"]);

var thingsToSay = ["hello", "there", "person!"];


// FOREACH is BEST PRACTICE
arrayOfStrings = ["sun", "moon", "stars"];

// your code here
function lengths(arrayOfStrings) {
  var len = arrayOfStrings.length;
  // forEach(arrayOfStrings(thislengths) {
  // // arrayOfStrings.length
  // return  lengths;
  console.log(len);
}

// CHECK OUT MAP


/*
  2. Write a Javascript function called `transmogrifier`
  This function should accept three arguments, which you can assume will be numbers.
  The transmogrified result of three numbers is the product of the first two numbers,
  raised to the power of the third number.
  Your function should return the "transmogrified" result.
*/

// your code here

/*
  3. Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words (not letters) reversed. Don't worry
  about punctuation. I.e. "hello world" should become "world hello".
*/

// your code here
