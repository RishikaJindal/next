// Using the JavaScript language, have the function lineOrdering(strArr) read
//  * the strArr parameter being passed which will represent the relations among
//  * people standing in a line. The structure of the input will be
//  * ["A>B","B>C","A<D",etc..]. The letters stand for different people and the
//  * greater than and less than signs stand for a person being in front of someone
//  * or behind someone. A>B means A is in front of B and B<C means that B is
//  * behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are
//  * the following ways you can arrange the people in line: DSJB, SDJB and DJSB.
//  * Your program will determine the number of ways people can be arranged in
//  * line. So for this example your program should return the number 3. It also
//  * may be the case that the relations produce an impossible line ordering,
//  * resulting in zero as the answer.
//  *
//  * Only the symbols <, >, and the uppercase letters A...Z will be used. The
//  * maximum number of relations strArr will contain is ten.
//  *
function lineOrdering(str){
    console.log(str);
  // let  str=strArr.toString();
//    let neword=str.replace('>',',');
//    //console.log(neword);
//    let v1=neword.replace('<',',');
//    console.log(v1);
//     let newarr=str.split('>');
   // let newstr=newarr.split('<');
   //console.log(newstr);
   //let result;
//    for(let i=0;i<strArr.length;i++){
//     if(strArr[i]==='>'||'<'){
//         console.log('hello',strArr[i]);
//          //result=strArr[i].join(',');
//         let x1=(strArr[i].split(''));
//         let x2=x1.join('');
         
//     }
   
//     //console.log (result);
//    }
let y,x;
for(let i=0;i<str.length;i++){
    x= str[i].concat(str[i+1]);
    
}

console.log(y);
 y=x.split('');

}
lineOrdering(["J>B","B<S","D>J"]);