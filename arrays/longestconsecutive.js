/*Problem Statement                                            *
* Have the function LongestConsecutive(arr) take the array of  *
* positive integers stored in arr and return the length of the *
* longest consecutive subsequence (LCS).                       *
* An LCS is a subset of the original list where the numbers    *
* are in sorted order, from lowest to highest, and are in a    *
* consecutive, increasing order. The sequence does not need to *
* be contiguous and there can be several different subsequences*
*                                                              *
* For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few *
* consecutive sequences are [1, 2, 3, 4], and [8, 9].          *
* For this input, your program should return 4 because that is *
* the length of the longest consecutive subsequence.           *
*                                                              *
* If there are less than four numbers in the array your program*
* should return the sum of all the numbers in the array.       *
*                                                              *
* Examples                                                     *
* Input 1: [6, 7, 3, 1, 100, 102, 6, 12]                       *
* Output 1: 2                                                  *
*                                                              *
* Input 2: [5, 6, 1, 2, 8, 9, 7]                               *
* Output 2: 5                              */
function LongestConsecutive(arr){
    if(arr.length===0){
        return 0;
    }
    else{
    arr.sort((a,b)=>a-b);
    console.log(arr);
    let currentsequence=[arr[0]];
    let longestsequence=[arr[0]];
for(let i=0;i<=arr.length;i++){
    if(arr[i]===arr[i-1]+1){
        currentsequence.push(arr[i]);
    }
    else{
        currentsequence=[arr[i]];
        //console.log(currentsequence);
    }
    if(currentsequence.length>longestsequence.length){
        longestsequence=[...currentsequence];
    }

    
}
 console.log(longestsequence);
 return longestsequence.length;
    }

}
const input=[5, 6, 1, 2, 8, 9, 7];
console.log(LongestConsecutive(input));
