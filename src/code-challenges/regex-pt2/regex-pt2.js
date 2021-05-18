export function sortByChildren(array) {
  return array.sort((a, b) => {
    if (a.children.length > b.children.length) return 1;
    if (a.children.length < b.children.length) return -1;
    return 0;
  });
}

export function replaceZeros(str){
  const regex = /[0]/;
  return str.replace(regex, 'zero');
}

export const validatePin = (pin) => {
  const regex = /^\d{4}$/;
  console.log(pin.match(regex));
  return pin.match(regex);
};
