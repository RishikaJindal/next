function xo(str){
    if(str.length%2===1){
        return false;

    }
    else{
    let total=0
    for(let i=0;i<=str.length;i++){

        if(str[i]==="x"){
            total++;
        }
    }
    if(total===str.length/2){
        return true;
    }
    else{
        return false;
    }
    
    }

}
console.log(xo("xoxoxoxoxo"));