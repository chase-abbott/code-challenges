export function toLastNames(people) {
  return people.map(person => {
    return `${person.firstName} ${person.lastName}`;
  });
}