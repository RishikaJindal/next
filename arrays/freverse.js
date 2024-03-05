// Have the function firstReverse(str) take the str parameter being passed and
//  * return the string in reversed order. For example: if the input string is
//  * "Hello World and Coders" then your program should return the string
//  * "sredoC dna dlroW olleH".
function firstReverse(str){
    let newstr=str.split('').reverse();
    let result=newstr.join('');
    return result;






}
console.log(firstReverse( "Hello World and Coders"))