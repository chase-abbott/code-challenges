export function capitalizeObjectKeys(obj){
  const array = Object.keys(obj);
  return array.map(item => item.toUpperCase());
}