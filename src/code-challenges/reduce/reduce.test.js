import { toLastNames, addValues } from './reduce.js';

test('It should return the first and last names', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('It should add the numbers in an array', () => {
  expect(addValues([1, 2, 3, 4, 5])).toBe(15);
});