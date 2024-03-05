// Using the JavaScript language, have the function arrayRotation(arr) take the
// * arr parameter being passed which will be an array of non-negative integers
// * and circularly rotate the array starting from the Nth element where N is
// * equal to the first integer in the array. For example: if arr is [2, 3, 4, 1,
// * 6, 10] then your program should rotate the array starting from the 2nd
// * position because the first element in the array is 2. The final array will
// * therefore be [4, 1, 6, 10, 2, 3], and your program should return the new
// * array as a string, so for this example your program would return 4161023. The
// * first element in the array will always be an integer greater than or equal to
// * 0 and less than the size of the array.
// Examples                                                     *
// * Input 1: [3,2,1,6]                                           *
// * Output 1: 6321                                               *
// *                                                              *
// * Input 2: [4,3,4,3,1,2]                                       *
// * Output 2: 124343                                             *
// *                   
function arrayRotation(arr){
    let i=arr[0];
    let rightpart=arr.slice(0,i);
    console.log(rightpart);
    let leftpart= arr.slice(i,arr.length);
    console.log(leftpart);
    let newarr=leftpart.concat(rightpart);
    console.log(newarr);
}
arrayRotation(  [3,2,1,6]  );
arrayRotation(  [4,3,4,3,1,2]     );
//arrayRotation(  [3,2,1,6]  );