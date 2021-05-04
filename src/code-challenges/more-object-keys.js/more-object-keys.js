export function getHouses(arr){
  return arr.map(element => Object.values(element)[3]);
}