function firstReverse(str){
    let arr=str.split('');
   // console.log(arr);
    let word=arr.reverse();
   // console.log(word);
     let required=word.join('');
     console.log(required);
}
 let input = "coderbyte";
 firstReverse(input);