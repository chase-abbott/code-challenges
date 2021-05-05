export function getHouses(arr){
  return arr.map(element => Object.values(element)[3]);
}

export function updateNumbers(obj){
  const array = (Object.entries(obj));

  return array.map(arr => arr[0] + ': ' + arr[1]);
}

// export function houseSize(arr){
//   const array = arr.array.forEach(element => {
      
//   });(element => Object.values(element));

//   console.log(array);
// }

export function hasChildrenEntries(arr, character) {
  const children = arr.map(person => person.children);
  console.log(children);
  if (character.children === []) return false;
} 