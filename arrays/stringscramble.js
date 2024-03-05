// Problem Statement                                            *
// * Have the function StringScramble(str1,str2) take both        * 
// * parameters being passed and return the string true if a      *
// * portion of str1 characters can be rearranged to match str2,  *
// * otherwise return the string false.                           *
// * For example: if str1 is "rkqodlw" and str2 is "world" the    *
// * output should return true. Punctuation and symbols will not  *
// * be entered with the parameters.                              *
// *                                                              *
// * Examples                                                     *
// * Input 1: "cdore" & "coder"                                   *
// * Output 1: true                                               *
// *                                                              *
// * Input 2: "h3llko" & "hello"                                  *
// * Output 2: false           

function StringScramble(str1,str2){
   // console.log(str1);
  // console.log(str2);
let array1=str1.split('');
let array2=str2.split('');
for(let i=0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
        if(array1[i]===array2[j]){
        array1.splice(i,1);
    array2.splice(j,1);
    i--;
    break;}
    }
}
if(array2.length===0){
    return true;
}
else{return false;}

}
console.log(StringScramble("h3llko","hello" ));