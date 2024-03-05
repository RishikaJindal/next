/*Problem Statement                                            *
 * Have the function FizzBuzz(num) take the num parameter being *
 * passed and return all the numbers from 1 to num separated by *
 * spaces but replace every number that is divisible by 3       *
 * with the word "Fizz", replace every number that is divisible *
 * by 5 with the word "Buzz", & every number that is divisible  *
 * by both 3 and 5 with the word "FizzBuzz".                    *
 * For example: if num is 16, the code should return the string *
 * 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 *
 * The input will be within the range 1 - 50.                   *
 *                                                              *
 * Test Cases                                                   *
 * For example: if the input string is "Hello World and Coders" *
 * then your program should return the string                   *
 * sredoC dna dlroW olleH.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: 3                                                   *
 * Output 1: "1 2 Fizz"                                         *
 *                                                              *
 * Input 2: 8                                                   *
 * Output 2: "1 2 Fizz 4 Buzz Fizz 7 8"             */
function  FizzBuzz(num){
    if(num<0||num>50){
        return "input is invalid";
    }
    let result='';
    for(let i=1;i<=num;i++){
    if(i%3===0&&i%5===0){
        result +=  ' FizzBuzz  ';

    }
    else if (i%3===0){
        result +=' Fizz ';
    }
    else if (i%5===0){
        result +=' Buzz ';
    }
    else {
        result +=i+'  ';
    }
}
return result.trim();

}
 let input=16;
 console.log(FizzBuzz(input));