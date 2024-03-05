// Have the function countingAnagrams(str) take the str parameter and determine
//  * how many anagrams exist in the string. An anagram is a new word that is
//  * produced from rearranging the characters in a different word, for example:
//  * cars and arcs are anagrams. Your program should determine how many anagrams
//  * exist in a given string and return the total number. For example: if str is
//  * "cars are very cool so are arcs and my os" then your program should return 2
//  * because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd
//  * anagram. The word "are" occurs twice in the string but it isn't an anagram
//  * because it is the same word just repeated. The string will contain only
//  * spaces and lowercase letters, no punctuation, numbers, or uppercase letters.
function  countingAnagrams(str){
    let words=str.split(" ")
    //console.log(words);
    let uniqueWords= new Set(words);
    console.log(uniqueWords);
    let signature={};
    uniqueWords.forEach(word =>{
        let key = word.split('').sort().join('');
        if(signature[key]===undefined){
            signature[key]=1;
        }
        else {
            signature[key]++;
        }
    });
    let anagrams= Object.values(signature).reduce((sum,value)=>
        sum + (value-1),0
    );
    return anagrams;


}
console.log(countingAnagrams("cars are very cool so are arcs and my os"))