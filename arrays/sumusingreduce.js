const arr=[1,2,3,4,5];
const sum=arr.reduce((previousSum,element)=>{
    const newSum=previousSum+element;
    return newSum;
    
},0);
console.log(sum);