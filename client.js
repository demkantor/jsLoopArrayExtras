console.log("here we go");

let allTheWords = [ 'calculating', 'guitar', 'various', 'thirsty', 'history', 'friend', 'discreet', 'godly', 'grip', 'wait', 'humor',
'agonizing', 'jazzy', 'sail', 'love', 'crow', 'giants', 'ball', 'curl', 'vivacious', 'excuse', 'extend', 'black', 'rabid', 'shirt',
'prefer', 'cup', 'mundane', 'nimble', 'unbiased', 'meal', 'overflow', 'rhetorical', 'clam', 'dusty', 'dirty', 'understood', 'royal',
'cloistered', 'dry', 'redundant', 'letter', 'wool', 'scattered', 'ear', 'offer', 'auspicious', 'funny', 'nostalgic', 'crash', 'crib',
'error', 'five', 'step', 'powder', 'minute', 'exotic', 'pedal', 'mountain', 'appliance', 'girls', 'pour', 'closed', 'unbecoming',
'button', 'glistening', 'press', 'previous', 'shy', 'fool', 'peck', 'warlike', 'end', 'sugar', 'jittery', 'wealth', 'applaud',
'flight', 'tiny', 'drop', 'bubble', 'cluttered', 'famous', 'sisters', 'fly', 'lick', 'brake', 'lazy', 'debt', 'breathe', 'makeshift',
'day', 'book', 'curve', 'mend', 'fortunate', 'breezy', 'tremble', 'hall', 'house' ];

// console.log how many words are in the array
function howLong(array) {
  return ("The length of this array is " + array.length + " words.");
}//finds length of array
console.log(howLong(allTheWords));


// console.log "true" if allTheWords contains the word "error", "false" if it does not
function doesItHave(thisWord) {
  if (allTheWords.includes(thisWord) === true){
    return (true + ", The array inludes: " + (thisWord));
  }
    return (false + ", The array does not include: " + (thisWord));
}//searches array for a value and returns true or false
console.log(doesItHave("error"));
console.log(doesItHave("sialfish"));


// console.log an array of all words that are longer than 7 characters
function wordLength(number){
  let someOfTheWords = allTheWords.filter(word => word.length >= number);
  return ("Here is the list of words containg " + number + " letters or more:", someOfTheWords);
}//returns array of words shorter or equal to given number

console.log(wordLength(7));


// console.log an array of all words that do not contain the letter "e"

function allThe(letter) {
  let letterSearch = allTheWords.filter(letterSearch => letterSearch.includes(letter));
  return (letterSearch);
}//all the words that contains a letter

function notAllTheWords(letter) {
  let letterSearch = allTheWords.filter(letterSearch => !letterSearch.includes(letter));
  return (letterSearch);
}//all the words that doesnt contain a letter

console.log(allThe("e"));
console.log(notAllTheWords("e"));



// console.log an array of all words that either start with the letter "s" or end with "ing"

function startsWithEndsWith(letter, letters){
  let deezWordz = allTheWords.filter(word => word.startsWith(letter));
  let dozeWordz = allTheWords.filter(word => word.endsWith(letters));
  console.log(dozeWordz, deezWordz);
}//returns array of words starting with "letter" and ending with "letters"

startsWithEndsWith("s", "ing");


// console.log the average word length in the array

let sum = allTheWords.reduce((a, b) => a + b);
let newSum = sum.length;
let avg = (newSum / allTheWords.length);

console.log("the avrage word length in the array allTheWords is: ", avg);



// console.log an array of all words shorter than the average word length
function shorterThan(number){
  let someOfTheWords = allTheWords.filter(word => word.length < number);
  return (someOfTheWords);
}//returns array of words shorter than given number (or variable that equals a number)

console.log(shorterThan(avg));
