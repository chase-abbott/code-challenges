import { sortByChildren, replaceZeros, validatePin, validateWord, hasNumber, validateEmail } from './regex-pt2.js';

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    let characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      }
    ];
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

test('It should replace zeros', () => {
  expect(replaceZeros('hello 0')).toStrictEqual('hello zero');
  expect(replaceZeros('hell0')).toStrictEqual('hellzero');
});

test('It should return true if there is a 4 digit pin', () => {
  expect(validatePin('1234')).toBeTruthy();
  expect(validatePin('3456')).toBeTruthy();
  expect(validatePin('1234123')).toBeFalsy();
});

test('It should return true if there is a word between 5 and 10 characters long', () => {
  expect(validateWord('flossy')).toBeTruthy();
  expect(validateWord('humuhumunukunukuapuaa')).toBeFalsy();
  expect(validateWord('hi')).toBeFalsy();
});
test('to determine if a string has one or more letter followed by one or more digit.', () => {
  expect(hasNumber('flossy2')).toBeTruthy();
  expect(hasNumber('12hello')).toBeFalsy();
  expect(hasNumber('f10ssy')).toBeTruthy();
});

test('To determine if a valid email', () => {
  expect(validateEmail('cabbott93@gmail.com')).toBeTruthy();
  expect(validateEmail('ca.bbott93@gmail.com')).toBeTruthy();
  expect(validateEmail('ca.bbott93@gmail.org')).toBeTruthy();
  expect(validateEmail('ca.bbott93@gmail.net')).toBeTruthy();
  expect(validateEmail('cabbott93@gmail.com:3000')).toBeFalsy();
  expect(validateEmail('cabbott93!@gmail.com:3000')).toBeFalsy();
});
