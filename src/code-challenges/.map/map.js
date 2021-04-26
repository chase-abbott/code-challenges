export function doubleNumbers(array) {
    const newArray = array.map(item => item * 2)
    return newArray;
}

export function stringItUp(array) {
    const newArray = array.map(item => String(item))

    return newArray;
}