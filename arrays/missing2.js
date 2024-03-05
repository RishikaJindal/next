function MissingDigit(str){
    let[left , right]=str.split("=");
    if(left.includes('?')){
        for(let i=0;i<100;i++){
            let leftEval=left.replace('?',i.toString());
            if(eval(leftEval)===eval(right)){
                return i;
            }
        }
    }
        
            if(right.includes('?')){
                for(let i=0;i<100;i++){
                    let rightEval=right.replace('?',i.toString());
                    if(eval(left)==eval(rightEval)){
                        return i;
                    }
                }
            }
        }

    


console.log(MissingDigit( "56? * 106 = 5?678"));