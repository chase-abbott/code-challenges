export function getHouses(arr){
  return arr.map(element => Object.values(element)[3]);
}

export function updateNumbers(obj){
  const array = (Object.entries(obj));

  return array.map(arr => arr[0] + ': ' + arr[1]);
}