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
  return pin.match(regex);
};

export const validateWord = (word) => {
  const regex = /^[a-zA-Z]{5,10}$/;
  return word.match(regex);
};

export const hasNumber = (string) => {
  const regex = /^[a-zA-Z]+[0-9]+/;
  return string.match(regex);
};

export const validateEmail = (email) => {
  const regex = /^.+\d+@{1}[a-z]+((?:.com)|(?:.net)|(?:.org))$/;
  return email.match(regex);
};
