import { findMax, returnTen, totalSum, grandTotal } from './code-challenges-11.js';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test('it should return highest number in the matrix', () => {
  expect(findMax([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(24);
 
});

test('it should return highest number in the matrix', () => {
  expect(totalSum([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(81);
  expect(totalSum([])).toStrictEqual(0);
 
});
