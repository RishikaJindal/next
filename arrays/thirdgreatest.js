/*Problem Statement                                            *
 * Have the function ThirdGreatest(strArr) take the array of    *
 * strings stored in strArr and return the third largest word   *
 * within it. So For Example:                                   *
 * if strArr is ["hello", "world", "before", "all"] your output *
 * should be world because "before" is 6 letters long,          *
 * and "hello" and "world" are both 5, but the output should be *
 * world because it appeared as the last 5 letter word in the   *
 * array. If strArr was ["hello", "world", "after", "all"] the  *
 * output should be after because the first three words are all *
 * 5 letters long, so return the last one. The array will have  *
 * at least three strings and each string will only contain     *
 * letters.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: new string[] {"coder","byte","code"}                *
 * Output 1: code                                               *
 *                                                              *
 * Input 2: new string[] {"abc","defg","z","hijk"}              *
 * Output 2: abc                                                *
 *                          */

function ThirdGreatest(strArr){
   // console.log('hello');
    strArr.sort(function(a,b){
        return  b.length-a.length;

    });
    let thirdlargestword=strArr[2];
    console.log(thirdlargestword);

}
const input=["abc","defg","z","hijk"];
ThirdGreatest(input);