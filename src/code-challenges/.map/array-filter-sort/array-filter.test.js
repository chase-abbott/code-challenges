import { evensOnly, fiveAndGreaterOnly, fiveCharactersOrFewer } from './array-filter';

test('evens only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = evensOnly(input); // act
    expect(output).toEqual([6, 8, 2]); // assert
});

test('Five and greater only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = fiveAndGreaterOnly(input); // act
    expect(output).toEqual([6, 8]); // assert
});

test('Five characters or fewer', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
    const output = fiveCharactersOrFewer(input); // act
    console.log(output)
    expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
});