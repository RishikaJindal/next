// function arrayCouples(arr) {
//     // Check if the array length is even
//     if (arr.length % 2 !== 0) {
//         return "Array length must be even";
//     }

//     // Create an object to store reversed pairs
//     const reversedPairs = {};

//     // Iterate through pairs in the array
//     for (let i = 0; i < arr.length; i += 2) {
//         const pair = [arr[i], arr[i + 1]];
//         const reversedPair = [pair[1], pair[0]];

//         // Check if the reversed pair is already encountered
//         if (reversedPairs[reversedPair.toString()]) {
//             delete reversedPairs[reversedPair.toString()];
//         } else {
//             reversedPairs[pair.toString()] = true;
//         }
//     }

//     // Check if there are any remaining reversed pairs
//     const remainingPairs = Object.keys(reversedPairs).map(pair => pair.split(','));

//     if (remainingPairs.length === 0) {
//         return "yes";
//     } else {
//         // Return the incorrect pairs as a string
//         return remainingPairs.map(pair => pair.join(',')).join(',');
//     }
// }

// // Test cases
// console.log(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1])); // Output: "yes"
// console.log(arrayCouples([6, 2, 2, 6, 5, 14, 14, 1])); // Output: "5,14,14,1"
// console.log(arrayCouples([1, 2, 3, 4, 5, 6, 7, 8])); // Output: "1,2,3,4,5,6,7,8" 


function arrayCouples(arr){
    if (arr.length%2 !==0){
        return "array length must be even"
    }
     const reversedPair ={};
      for(let i=0;i<arr.length;i+=2){
        //const 

      }

}