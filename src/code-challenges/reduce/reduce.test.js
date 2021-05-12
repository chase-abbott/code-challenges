import { toLastNames, addValues, purchasePrice, countNumberOfElements, returnNames, reverseString } from './reduce.js';

test('It should return the first and last names', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('It should add the numbers in an array', () => {
  expect(addValues([1, 2, 3, 4, 5])).toBe(15);
});

test('It should add the total value of purchased items', () => {
  const array = [
    {
      item: 'dog',
      price: 200
    },
    {
      item: 'cat',
      price: 100
    },
    {
      item: 'bird',
      price: 50
    }
  ];
  expect(purchasePrice(array)).toBe(350);
});

test('It should count the number of items in the array', () => {
  const array = [
    {
      item: 'dog',
      price: 200
    },
    {
      item: 'cat',
      price: 100
    },
    {
      item: 'bird',
      price: 50
    }
  ];
  const secondArray = [
    {
      item: 'dog',
      price: 200
    }
  ];
  const thirdArray = [
    {
      item: 'dog',
      price: 200
    },
    {
      item: 'cat',
      price: 100
    },
    {
      item: 'bird',
      price: 50
    },
    {

    },
    {
        
    }
  ];
  expect(countNumberOfElements(array)).toBe(3);
  expect(countNumberOfElements(secondArray)).toBe(1);
  expect(countNumberOfElements(thirdArray)).toBe(5);
});

test('It should count the number of items in the array', () => {
  let starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a' },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  }];
  expect(returnNames(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
  
});

test('It should reverse a string', () => {
  expect(reverseString('Hello')).toBe('olleH');
});