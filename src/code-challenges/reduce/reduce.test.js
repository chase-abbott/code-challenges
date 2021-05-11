import { toLastNames } from './reduce.js';

test('It should return the first and last names', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});