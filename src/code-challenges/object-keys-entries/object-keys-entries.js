export function capitalizeObjectKeys(obj){
  const array = Object.keys(obj);
  return array.map(item => item.toUpperCase());
}

export function sortedKeys(obj){
  const array = Object.keys(obj);
  return array.sort((a, b) => a - b);
}
