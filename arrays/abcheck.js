/*Problem Statement                                            *
 * Have the function ABCheck(str) take the str parameter being  *
 * passed and return the string true if the characters a and b  *
 * are separated by exactly 3 places anywhere in the string at  *
 * least once (ie. "lane borrowed" would result in true because *
 * there is exactly three characters between a and b).          *
 * Otherwise return the string false.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: after badly                                         *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: Laura sobs                                          *
 * Output 2: true      */                       
function ABCheck(str){
    for(let i=0;i<=str.length;i++){
        if(str[i]==='a'){
            if(str[i+4]==='b'){
                return true;
            }
        }
    }
    return false;

}
let input= "after badly "  ;
console.log(ABCheck(input));                  