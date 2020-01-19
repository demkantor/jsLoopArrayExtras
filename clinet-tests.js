console.log("tested bits");
let allTheWords = [ 'calculating', 'guitar', 'various', 'thirsty', 'history', 'friend', 'discreet', 'godly', 'grip', 'wait', 'humor',
'agonizing', 'jazzy', 'sail', 'love', 'crow', 'giants', 'ball', 'curl', 'vivacious', 'excuse', 'extend', 'black', 'rabid', 'shirt',
'prefer', 'cup', 'mundane', 'nimble', 'unbiased', 'meal', 'overflow', 'rhetorical', 'clam', 'dusty', 'dirty', 'understood', 'royal',
'cloistered', 'dry', 'redundant', 'letter', 'wool', 'scattered', 'ear', 'offer', 'auspicious', 'funny', 'nostalgic', 'crash', 'crib',
'error', 'five', 'step', 'powder', 'minute', 'exotic', 'pedal', 'mountain', 'appliance', 'girls', 'pour', 'closed', 'unbecoming',
'button', 'glistening', 'press', 'previous', 'shy', 'fool', 'peck', 'warlike', 'end', 'sugar', 'jittery', 'wealth', 'applaud',
'flight', 'tiny', 'drop', 'bubble', 'cluttered', 'famous', 'sisters', 'fly', 'lick', 'brake', 'lazy', 'debt', 'breathe', 'makeshift',
'day', 'book', 'curve', 'mend', 'fortunate', 'breezy', 'tremble', 'hall', 'house' ];

// console.log how many words are in the array
console.log("length of this array is", allTheWords.length);

// console.log "true" if allTheWords contains the word "error", "false" if it does not
console.log(allTheWords.includes("error"));// returns true or false
console.log(allTheWords.includes("sailfish")); //test

// console.log an array of all words that are longer than 7 characters
function wordLength(number){
  let someOfTheWords = allTheWords.filter(word => word.length >= number);
  return ("Here is the list of words containg " + number + " letters or more:", someOfTheWords);
}
console.log(wordLength(7));

these are tests that didnt get output required

for (let i=0; i<allTheWords.length; i++){
    console.log(allTheWords[i].length);
} //lists the length of each word in array on a new line

let lengths = allTheWords.map(function(word) {
   return word + ' = ' + word.length;
});
console.log(lengths); //list the number of words then each word and its length

let lengthsMoreThanSeven = allTheWords.map(function(word) {
   return word.length >= 7;
});
console.log(lengthsMoreThanSeven); //lists the number of words and then notes for each if  >=7 true or false



// console.log an array of all words that do not contain the letter "e"

for (let i=0; i<allTheWords.length; i++)
{
    if(allTheWords[i].indexOf('e') == -1)
    {
        console.log("These words do not contain the letter 'e':", allTheWords[i]);
    }
} //gives me all words that does not contain 'e' but still need to make it an array

function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  });
}

console.log(filterItems(allTheWords, 'e'));//gives array of all words containg e


// console.log an array of all words that either start with the letter "s" or end with "ing"
function startsWith(letter){
  let deezWordz = allTheWords.filter(word => word.startsWith(letter));
  return ("Here is the list of words starting with " + letter + ":", deezWordz);
}//returns array of words starting with letters

console.log(startsWith("s"));

// console.log the average word length in the array

function superCounter(x) {
  let charCount = x.length;
  let wordCount = x.split(" ").length;
  let whiteSpace = wordCount - 1;
  let wordArray = x.split(" ");
  let wordAvg = 0;
  for (let i = 0; i < wordCount.length; i++){
    wordAvg += wordArray[i].length;
  }
  let avgLen = wordAvg / wordCount;
  console.log(("Words: " + wordArray[0]), "Character count: " + charCount, "Word count: " + wordCount, "Whitespace count: " + whiteSpace, "Word length average: " + avgLen);
};

superCounter("This function will analyze strings");


console.log(allTheWords.reduce((a,b) => (a+b)) / allTheWords.length);////fix this up to give output in one line

// console.log an array of all words shorter than the average word length
