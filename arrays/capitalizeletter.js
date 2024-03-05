
// * Problem Statement                                            *
// * Have the function LetterCapitalize(str) take the str         *
// * parameter being passed and capitalize the first letter of    *
// * each word. Words will be separated by only one space.        *
// *                                                              *
// * Examples                                                     *
// * Input 1: "hello world"                                       *
// * Output 1: Hello World                                        *
// *                                                              *
// * Input 2: "i ran there"                                       *
// * Output 2: I Ran There    
function LetterCapitalize(str){
    // let newstr=str.split(" ");
    // for(let i=0;i<newstr.length;i++){
    //     let word=newstr[i];
    //     let result=word[0].toUpperCase() 
    //     return result;

let splitToWords=str.split(" ");//  hello words
for(let i=0;i<=splitToWords.length;i++){
    let splitToLetters = splitToWords[i].split(''); //h e l l o , w,o,r,l,d 
    splitToLetters[0]=splitToLetters[0].toUpperCase();//H ello
    splitToWords[i]= splitToLetters.join('');



}
return splitToWords;

    }

console.log(LetterCapitalize("hello world"  ));