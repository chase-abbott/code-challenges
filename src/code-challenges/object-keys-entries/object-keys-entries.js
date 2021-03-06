export function capitalizeObjectKeys(obj){
  const array = Object.keys(obj);
  return array.map(item => item.toUpperCase());
}

export function sortedKeys(obj){
  const array = Object.keys(obj);
  return array.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
}

export function getFilteredKeys(obj){
  const array = Object.keys(obj);
  return array.filter(att => att === 'age');
}

export function getArrayOfKeysAndValues(obj){
  const array = Object.entries(obj);
  return array;
}

export function sortedArraysByValuesLength(obj){
  const array = Object.entries(obj);
  return array.sort((a, b) => {
    if (b[0].length > a[0].length) return 1;
    if (b[0].length < a[0].length) return -1;
    return 0;
  });
}
