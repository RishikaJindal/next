/*Have the function DashInsert(str) insert dashes ('-')        *
 * between each two odd numbers in str. For example: if str is  *
 * 454793 the output should be 4547-9-3. Don't count zero as an *
 * odd number.                                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: 99946                                               *
 * Output 1: 9-9-946                                            *
 *                                                              *
 * Input 2: 56730                                               *
 * Output 2: 567-30   */

function  DashInsert(str){
    const num= str.toString();
    console.log(num);

    const digits=num.split('');
    console.log(digits);
    for(let i=0;i<=digits.length-1;i++){
        if(parseInt(digits[i])%2 !==0&& parseInt(digits[i+1])%2 !==0){
digits.splice(i+1,0,'-');
i++;

        }

    }
    return digits.join('');

}
let input=99946   ;
console.log(DashInsert(input));