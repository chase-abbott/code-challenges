export function leastToGreatest(arr) {
    return arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
}

export function greatestToLeast(arr) {
    return arr.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    })
}

export function lengthSort(arr) {
    return arr.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return 0;
    })
}

