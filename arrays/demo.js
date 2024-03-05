// function letterCapitalize (str) {
// 	var splitToWords = str.split(' ');
// 		//if str = the cat is here then --> [the, cat, is, here]
// 	for (var i = 0; i < splitToWords.length; i++){
// 		var splitToLetters = splitToWords[i].split('');
// 		//[the...] --> [t, h, e] this cycles through then goes on to the next word
// 		splitToLetters[0] = splitToLetters[0].toUpperCase();
// 		splitToWords[i] = splitToLetters.join('');
// 		//i = the at the moment and it gets joined back into a word
// 	}
// 	return splitToWords.join(' ');
// };
// console.log(letterCapitalize("hello world"));
function me(str) {
    let [left, right] = str.split("=");
    
    if (left.includes('x')) {
    for (let i = 0; i <= 100; i++) {
    let leftEval = left.replace('x', i.toString());
    if (eval(leftEval) == eval(right)) {
    return i;
    }
    }
    } else {
    for (let i = 0; i <= 100; i++) {
    rightEval = right.replace('x', i.toString());
    if (eval(left) == eval(rightEval)) {
    return i;
    }
    }
    }
    
    
    }
    
    console.log(me("x + 14 = 24"));
    console.log(me("2 + 14 = x"));