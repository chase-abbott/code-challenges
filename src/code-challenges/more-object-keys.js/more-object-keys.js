export function getHouses(arr){
  return arr.map(element => Object.values(element)[3]);
}

export function updateNumbers(obj){
  const array = (Object.entries(obj));

  return array.map(arr => arr[0] + ': ' + arr[1]);
}

export function houseSize(arr){
  let count = 0;
  arr.forEach(obj => {
    if (obj.name) count++;
    if (obj.spouse) count ++;
    if (obj.children !== []) {
      count = count + obj.children.length; 
    }
  });
  return count;
}

export function hasChildrenEntries(arr, character) {
  let statement = false;
  const matching = arr.find(obj => obj.name === character);

  if (matching.children[0] !== undefined){
    statement = true;
  }
  return statement;
}

export function sortByChildren(arr){
  return arr.sort((a, b) => {
    if (a.children.length > b.children.length) return 1;
    if (a.children.length < b.children.length) return -1;
    return 0;
  });
}
