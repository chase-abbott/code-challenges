export function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

export function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5)
}

export function fiveCharactersOrFewer(arr) {
    return arr.filter(word => {
        if (word.length <= 5) return word
    })
}

export function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(person => {
        if (person.member) return person;
    })
}
