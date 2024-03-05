/*Problem Statement                                            *
 * Have the function SecondGreatLow(arr) take the array of      *
 * numbers stored in arr and return the second lowest and second*
 * greatest numbers, respectively, separated by a space.        *
 * For example: if arr contains [7, 7, 12, 98, 106] the output  *
 * should be 12 98. The array will not be empty and will contain*
 * at least 2 numbers. It can get tricky if there's just        *
 * two numbers!                                                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {1, 42, 42, 180}                          *
 * Output 1: 42 42                                              *
 *                                                              *
 * Input 2: new int[] {4, 90}                                   *
 * Output 2: 90 4          */
function SecondGreatLow(arr){
    arr.sort(function(a,b){
        return a-b;
    
    });
    console.log(arr);
    //console.log(arr[0]);
    if(arr.length===1){
        let low=arr[1];
        let great=arr[0];
        console.log(low+","+great);
    }
  else{
    //console.log("hello");
   if(arr[0]===arr[1])
       {
            console.log("hello");
            let secondlow=arr[2];
            return secondlow ;
       }
       else{
          secondlow=arr[1];
         return secondlow;
       }
        
        if(arr[arr.length-1]===arr[arr.length-2]){
             let secondlarge=arr[arr.length-3];
             return secondlarge;

            
        }
        else{
         let secondlarge=arr[arr.length-2];
         return secondlarge;
        
         

        }
        console.log(`${secondlow},${secondlarge}`);
       /* if(arr[arr[0]===arr[1]])
        {
            console.log("hello");
            let secondlow=arr[2];
            console.log("secondlowest number is"+secondlow );
        }*/
    }
}
const input=[41, 90];
SecondGreatLow(input);


