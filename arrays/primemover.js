//Prime Mover
//Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
//The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
function PrimeTime(number) {
    if (number < 2 || number !== Math.round(number)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function PrimeMover(num) {
    let primeArr = [];
    if (num === 0) {
        return 1;
    }
    let i = 2;
    while (primeArr.length < num) {
        if (PrimeTime(i)) {
            primeArr.push(i);
        }
        i++;
    }
    return primeArr[num - 1];
}
 console.log(PrimeMover(16));