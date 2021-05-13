export function sortByChildren(array) {
    return array.sort((a, b) => {
        if (a.children.length > b.children.length) return 1;
        if (a.children.length < b.children.length) return -1;
        return 0;
    })
}

export function containsW(str) {
    let regex = new RegExp('w')
    return str.match(regex)

}
