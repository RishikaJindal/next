function RunLength(str){
    let result='';
    count=1;
    for (let i=0;i<str.length;i++){
        let j=i+1;
        while(str[i]===str[j]){
            count++;
            if(count===9){
                j++;
                break;

            }
            else{j++;}
        }
            result=result.concat(`${count}${str[i]}`);
            count=1;
            i=j-1;
        

    }
    return result;

}
console.log(RunLength("wwwggopp"));