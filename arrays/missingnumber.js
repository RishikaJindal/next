/*Problem Statement                                            *
 * Have the function MissingDigit(str) take the str parameter,	*
 * which will be simple mathematical formula with three numbers,*
 * a single operator (+, -, *, or /) and an equal sign (=) and  *
 * return the digit that completes the equation.                *
 *                                                              *
 * In one of the numbers in the equation, there will be an x    *
 * character, and your program should determine what digit is   *
 * missing.                                                     *
 *                                                              *
 * For example, if str is "3x + 12 = 46" then your program      *
 * should output 4. The x character can appear in any of the    *
 * three numbers and all three numbers will be greater than or  *
 * equal to 0 and less than or equal to 1000000.                *
 *                                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "4 - 2 = x"		                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "1x0 * 12 = 1200"		                        *
 * Output 2: 0                     */
function MissingDigit(str){
    let split_equation=str.split("=");
    console.log(split_equation);
    let x_is_on_leftside=-1;
    let x_is_on_rightside=-1;
    let result=0;
    let missing_digit_equation='';
    x_is_on_leftside = split_equation[0].indexOf("x");
    x_is_on_rightside = split_equation[1].indexOf("x");
    if(x_is_on_leftside=== -1){
        
    }


    
}
let input="4 - 2 = x"		  ;
MissingDigit(input);