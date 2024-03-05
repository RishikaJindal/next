function AlphabetSoup(str){
    let newstr=str.split('').sort().join("");
    console.log(newstr);
}
let input="hooplah";  
AlphabetSoup(input);