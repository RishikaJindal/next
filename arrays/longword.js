//Longest Word
//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and
//return the largest word in the string. If there are two or more words that are the same length, return the
//first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen){
let newsen=sen.split(' ');
let greatestword='';
for(let i=0;i<newsen.length;i++){
    let word=newsen[i];
    if(word.length>greatestword.length){
        greatestword=word;
    }

}
return greatestword;

}
console.log(LongestWord("hello how are you rishika"));