// Problem Statement                                            *
//  * Have the function Palindrome(str) take the str parameter     *
//  * being passed and return the string true if the parameter is  *
//  * a palindrome, (the string is the same forward as it is       *
//  * backward) otherwise return the string false. For example:    *
//  * "racecar" is also "racecar" backwards. Punctuation & numbers *
//  * will not be part of the string.                              *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: never odd or even                                   *
//  * Output 1: true                                               *
//  *                                                              *
//  * Input 2: eye                                                 *
//  * Output 2: true       

function Palindrome(str){
  let originalstr= str.replace(/ /g,'');
  let reversedstr='';
  for(let i=originalstr.length-1;i>=0;i--){
    reversedstr +=originalstr[i];}
    if(originalstr===reversedstr){
        return true;

    }
    else{ return false;}
  }


console.log(Palindrome("eye"));