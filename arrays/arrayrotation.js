/*Problem Statement                                            *
* Have the function ArrayRotation(arr) take the arr parameter  *
* being passed which will be an array of non-negative integers *
* and circularly rotate the array starting from the Nth        *
* element where N is equal to the first integer in the array.  *
*                                                              *
* For example: if arr is [2, 3, 4, 1, 6, 10] then your program *
* should rotate the array starting from the 2nd position       *
* because the first element in the array is 2.                 *
* The final array will therefore be [4, 1, 6, 10, 2, 3], and   *
* your program should return the new array as a string, so for *
* this example your program would return 4161023.              *
* The first element in the array will always be an integer     *
* greater than or equal to 0 & less than the size of the array *
*                                                              *
* Examples                                                     *
* Input 1: [3,2,1,6]                                           *
* Output 1: 6321                                               *
*                                                              *
* Input 2: [4,3,4,3,1,2]                                       *
* Output 2: 124343                                             *
*                                               */
function ArrayRotation(arr){
    flag=0;
    /*for(let i=0;i<=arr.length;i++)
    {
        console.log(arr[i]);
       
    //return true;
    //console.log("all are positive");

       
    }*/
    
    for(let i=0;i<=arr.length;i++){
        if (arr[i]<=0)
        {
            flag=1;
            
            
            
        }


       
    }
    
    let num=input[0];
    rotate(arr,num);



    
    
}
 const input=[4,3,4,3,1,2];
 const allPositive=ArrayRotation(input);
 if (flag===0){
   // console.log("positive numbers ");
    const allPositive=input;
   // console.log(allPositive);
}
else{
    console.log("invalid input");
}
//let num=input[0];
//console.log(num);
function rotate(input,num){

    if(num<=0||num>=input.length){
       // console.log("incorrect first number");
       // newarr=
    }
    const leftPart= input.slice(0,num );
    const rightPart=input.slice(num);
     const  newArray=[...rightPart,...leftPart];
     //console.log(newArray);
    const  result=newArray.join('');
    console.log(result);
}
//rotate(input,num);


