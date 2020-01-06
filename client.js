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
console.log(allTheWords.includes("error"));
console.log(allTheWords.includes("sailfish")); //test

// console.log an array of all words that are longer than 7 characters
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

let someOfTheWords = allTheWords.filter(word => word.length >= 7);
console.log("Here is the list of words containg 7 letters or more:", someOfTheWords); //This method finally gets me somewhere

// console.log an array of all words that do not contain the letter "e"
for (let i=0; i<allTheWords.length; i++)
{
    if(allTheWords[i].indexOf('e') != -1)
    {
        console.log("These words contain the letter 'e':", allTheWords[i]);
    }
} //gives me all words that contains 'e' but needs to not contain, also needs to be an array

for (let i=0; i<allTheWords.length; i++)
{
    if(allTheWords[i].indexOf('e') == -1)
    {
        console.log("These words do not contain the letter 'e':", allTheWords[i]);
    }
} //gives me all words that does not contain 'e' but still need to make it an array


// console.log an array of all words that either start with the letter "s" or end with "ing"

// console.log the average word length in the array

// console.log an array of all words shorter than the average word length
