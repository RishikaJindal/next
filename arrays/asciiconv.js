// Problem Statement                                            *
// * Have the function ASCIIConversion(str) take the str parameter*
// * being passed and return a new string where every character,  *
// * aside from the space character, is replaced with its         *
// * corresponding decimal character code. For example: if str is *
// * "dog" then your program should return the string 100111103   *
// * because d = 100, o = 111, g = 103.                           *
// *                                                              *
// * Examples                                                     *
// * Input 1: "hello world"                                       *
// * Output 1: 104101108108111 119111114108100                    *
// *                                                              *
// * Input 2: "abc **"                                            *
// * Output 2: 979899 4242     

    function ASCIIConversion(str){
        let result='';
        
        //console.log(str.length);
        for (let i=0;i<str.length;i++){
            if(str[i]===' '){
             result+=' ';
            }
            else{
            result+=str.charCodeAt(i);
            }
        }
        return result;
    }
    console.log(ASCIIConversion("hello world"));