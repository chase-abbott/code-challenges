export function howMuchPencil(str){
  const array = [];

  for (let i = -1; i < str.length; i++){
    array.push(str.slice((i + 1)));
  }
  
  return array;
}

export function wordsToCharList(str){
  let array = [];
  if (str){
    for (let i = 0; i < str.length; i++){
      array.push(str[i]); 
    }
  } else {
    array = [str];
  }
  return array;
}
