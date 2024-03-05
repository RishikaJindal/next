function primeTime(num) {
    for (let i = 2, max = Math.floor(num / 2); i <= max; i++) {
        if (num % i === 0) {
            // divisible!  not prime
            return 'false';
        }
    }
    return 'true';
}






 const input=56 ;
 console.log(primeTime(input));