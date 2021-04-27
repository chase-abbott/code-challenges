export function doubleNumbers(array) {
    const newArray = array.map(item => item * 2)
    return newArray;
}

export function stringItUp(array) {
    const newArray = array.map(item => String(item))

    return newArray;
}

export function capitalize(array) {
    const newArray = array.map(item =>
        item[0].toUpperCase() + item.toLowerCase().slice(1)
    )
    return newArray;
}

export function namesOnly(arr) {
    return arr.map(obj => obj.name)
}

