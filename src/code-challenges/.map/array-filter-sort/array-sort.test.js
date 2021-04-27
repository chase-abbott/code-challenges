import { leastToGreatest, greatestToLeast, lengthSort } from './array-sort';

test('least to greatest', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = leastToGreatest(input); // act
    expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
});

test('greatest to least', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = greatestToLeast(input); // act
    expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
});

test('length sort', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten']; // arrange
    const output = lengthSort(input); // act
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']); // assert
});
