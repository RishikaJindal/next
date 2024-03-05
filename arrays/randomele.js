//pick a random element from array
 const arr=['red','green','yellow','white','black'];
 const randomNumber=Math.round(Math.random()*100);
 const randomElement=randomNumber%arr.length;
 console.log(arr[randomElement]);