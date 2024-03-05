// Problem Statement                                            *
// * Have the function AlphabetSearching(str) take the string     *
// * parameter being passed and return the string true if every   *
// * single letter of the English alphabet exists in the string,  *
// * otherwise return the string false.                           *
// * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"    *
// * then your program should return the string true because every*
// * character in the alphabet exists in this string even though  *
// * some characters appear more than once.                       *
// *                                                              *
// * Examples                                                     *
// * Input 1: abcdefghijklmnopqrstuvwxyyyy                        *
// * Output 1: false                                              *
// *                                                              *
// * Input 2: abc123456kmo                                        *
// * Output 2: false        
function AlphabetSearching(str){
    let alp = new Set(str);
    console.log(alp);
    if(alp.size===26){return true;}
    else{return false;}
}
console.log(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pnsowtuv"));
