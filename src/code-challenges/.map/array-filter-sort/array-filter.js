export function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
}

export function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5)
}
