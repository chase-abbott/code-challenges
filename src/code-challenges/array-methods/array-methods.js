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

export function listFoods(recipe){
  const array = [];
  recipe.ingredients.forEach(ingredient => {
    let string;
    let stringArray = ingredient.split(' ');
    let modifiedArray = stringArray.slice(2, 5);
    modifiedArray.forEach(item => {
      if (!string){
        string = item;
      } else {
        string = `${string} ${item}`;
      }
    });
    array.push(string);
  });

  return array;
}