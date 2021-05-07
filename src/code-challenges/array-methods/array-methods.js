export function howMuchPencil(str){
  const array = [];
  for (let i = -1; i < str.length; i++){
    array.push(str.slice((i + 1)));
  }
  
  return array;
}