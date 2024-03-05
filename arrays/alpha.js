function alpha(str){
 let newarr=str.split('');
  let me=newarr.sort().join('');
 return me;
}
console.log(alpha("hello"));