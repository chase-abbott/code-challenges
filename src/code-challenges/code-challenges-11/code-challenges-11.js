export function returnTen(str){
  let array = [];
  if (str.length < 10) {
    for (let i = 0; i < str.length; i++){
      array.push(str[i]);
      
    }}
  if (str.length > 10){
    for (let i = 0; i < str.length; i++) {
      if (i === (str.length - 10)) {
        const string = str.slice((str.length - 10), str.length);
   
        for (let i = 0; i < string.length; i++){
          array.push(string[i]);
        }}
    }}
  return array;
    
  
}

export function findMax(matrix) {
  let max = 0;
  matrix.forEach(array => {
    array.find(number => {
      if (number > max){
        max = number;
      }
    });
  });
  return max;
}

export function totalSum(matrix) {
  let sum = 0;
  matrix.forEach(array => {
    array.forEach(number => sum += number);
  });
  return sum;
}



export function grandTotal(stores){
  let array = [];
  stores.forEach(array => {
    console.log(array);
  });
  return array;
  
}