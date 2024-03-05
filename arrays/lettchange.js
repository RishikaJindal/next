// Problem Statement                                            *
// * Have the function LetterChanges(str) take the str parameter  *
// * being passed and modify it using the following algorithm.    *
// * Replace every letter in the string with the letter following *
// * it in the alphabet (ie. c becomes d, z becomes a). Then      *
// * capitalize every vowel in this new string (a, e, i, o, u)    *
// * & finally return this modified string.                       *
// *                                                              *
// * Examples                                                     *
// * Input 1: hello*3                                             *
// * Ouput 1: Ifmmp*3                                             *
// *                                                              *
// * Input 2: fun times!                                          *
// * Output 2: gvO Ujnft!       

function LetterChanges(string){
    let LetterChangestring='';
    let regex=/^[A-Za-z]$/;
    let vowelregex=/^[aeiouAEIOU]$/;
    for(let i=0;i<string.length;i++){
        if(string[i].match(regex)){
            if(String.fromCharCode(string.charCodeAt(i)+1).match(vowelregex)){
                LetterChangestring += String.fromCharCode(string.charCodeAt(i)+1).toUpperCase();
            }
            else LetterChangestring += String.fromCharCode(string.charCodeAt(i)+1);
        }
        else LetterChangestring += string[i];
    }
    return LetterChangestring;
}
console.log(LetterChanges("hello*3" ));