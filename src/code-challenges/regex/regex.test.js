import { containsW, containsWorld, isCapitalized, isNum, sortByChildren } from './regex.js'

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

it('It should find words with the letter w', () => {
    expect(containsW('hello world')).toBeTruthy()
    expect(containsW('Hello World')).toBeFalsy()
    expect(containsW('hello everyone')).toBeFalsy()
})

it('It should find word or numbers with numbers', () => {
    expect(isNum(1234567890)).toBeTruthy()
    expect(isNum('12345')).toBeTruthy()
    expect(isNum('h3llo w0rld')).toBeTruthy()
    expect(isNum('hello world')).toBeFalsy()
    expect(isNum('')).toBeFalsy()
})

it('It should find worlds', () => {
    expect(containsWorld('hello world')).toBeTruthy()
    expect(containsWorld('Hello World')).toBeFalsy()
    expect(containsWorld('hello everyone')).toBeFalsy()
})

it('It should find capitalized letters', () => {
    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toEqual(['We', 'Return', 'Words', 'With', 'Letter'])
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May'])
    expect(isCapitalized('these words are all failures')).toEqual([])
})
