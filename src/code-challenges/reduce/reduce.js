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