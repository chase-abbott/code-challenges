export function toLastNames(people) {
  return people.map(person => {
    return `${person.firstName} ${person.lastName}`;
  });
}

export function addValues(arr){
  return arr.reduce((accumulator, number) => {
    return accumulator += number;
  });
}

export function purchasePrice(arrOfObj){
  return arrOfObj.reduce((accumulator, item) => {
    return accumulator += item.price;
  }, 0);
}

export function countNumberOfElements(arr){
  return arr.reduce((accumulator, item, index) => {
    return accumulator += 1;
  }, 0);
}

export function returnNames(arr){
  return arr.reduce((accumulator, item, index) => {
    accumulator[index] = item.name;
    return accumulator;
  }, []);
}