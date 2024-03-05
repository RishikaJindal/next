// Problem Statement                                            *
//  * Have the function MissingDigit(str) take the str parameter,	*
//  * which will be simple mathematical formula with three numbers,*
//  * a single operator (+, -, *, or /) and an equal sign (=) and  *
//  * return the digit that completes the equation.                *
//  *                                                              *
//  * In one of the numbers in the equation, there will be an x    *
//  * character, and your program should determine what digit is   *
//  * missing.                                                     *
//  *                                                              *
//  * For example, if str is "3x + 12 = 46" then your program      *
//  * should output 4. The x character can appear in any of the    *
//  * three numbers and all three numbers will be greater than or  *
//  * equal to 0 and less than or equal to 1000000.                *
//  *                                                              *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: "4 - 2 = x"		                                *
//  * Output 1: 2                                                  *
//  *                                                              *
//  * Input 2: "1x0 * 12 = 1200"		                        *
//  * Output 2: 0 


function MissingDigit(str){
    let[left , right]=str.split("=");
    if(left.includes('x')){
        for(let i=0;i<100;i++){
            let leftEval=left.replace('x',i.toString());
            if(eval(leftEval)===eval(right)){
                return i;
            }
        }
    }
        else{
            if(right.includes('x')){
                for(let i=0;i<100;i++){
                    let rightEval=right.replace('x',i.toString());
                    if(eval(left)==eval(rightEval)){
                        return i;
                    }
                }
            }
        }

    }


console.log(MissingDigit( "1x0 * 12 = 1200"));