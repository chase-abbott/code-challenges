import { toLastNames, addValues, purchasePrice, countNumberOfElements } from './reduce.js';

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