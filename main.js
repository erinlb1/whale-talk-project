let input = 'hey there cowboy';
const vowels = ['a', 'e', 'i' ,'o','u' ];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(i);
  for (let j = 0; j < vowels.length; j++ ){
    // console.log(j);
 if (input[i] === vowels[j]) {

  if (input[i] === 'e') {
   resultArray.push('ee');
  
   } else if  (input[i] === 'u') {
 resultArray.push('uu');
  
    } else { resultArray.push(input[i]);
 }
}
}
}
 
console.log(resultArray.join('').toLowerCase());
