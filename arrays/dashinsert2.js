/*Problem Statement                                            *
* Have the function DashInsertII(str) insert dashes ('-')      *
* between each two odd numbers and insert asterisks ('*')      *
* between each two even numbers in str.                        *
*                                                              *
* For example: if str is 4546793 the output should be          *
* 454*67-9-3. Don't count zero as an odd or even number.       *
*                                                              *
* Examples                                                     *
* Input 1: 99946                                               *
* Output 1: 9-9-94*6                                           *
*                                                              *
* Input 2: 56647304                                            *
* Output 2: 56*6*47-304                                        *
*                                                              *
* Solution Efficiency                                          *
* The user scored higher than 36.2% of users who solved this   *
* challenge.         */
function DashInsertII(str) {
    const num = str.toString();
    const digits = num.split('');

    for (let i = 0; i < digits.length - 1; i++) {
        if (parseInt(digits[i]) % 2 !== 0 && parseInt(digits[i + 1]) % 2 !== 0) {
            digits.splice(i + 1, 0, '-');
            i++;
        } else if((parseInt(digits[i]) % 2 === 0 && parseInt(digits[i + 1]) % 2 === 0)){
            //console.log("hii");
            digits.splice(i+1, 0, '*');
            i++;
        }
    }

    return digits.join('');
}

//let input = 99946;
console.log(DashInsertII(56647304));

