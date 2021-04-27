import { evensOnly, fiveAndGreaterOnly, fiveCharactersOrFewer, peopleWhoBelongToTheIlluminati, ofAge } from './array-filter';

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

test('member of the illuminati', () => {
    const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
    ]; // arrange
    const output = peopleWhoBelongToTheIlluminati(input); // act

    expect(output).toEqual([
        { name: 'Angelina Jolie', member: true },
        { name: 'Paris Hilton', member: true },
        { name: 'Bob Ziroll', member: true }
    ]); // assert
});

test('by age', () => {
    const input = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ]; // arrange
    const output = ofAge(input); // act

    expect(output).toEqual(
        [
            { name: 'Angelina Jolie', age: 80 },
            { name: 'Bob Ziroll', age: 100 }
        ]
    ); // assert
});
