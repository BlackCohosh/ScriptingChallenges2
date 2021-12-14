// Write your solution below:
const makeUnique = (str) => {
    return str.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .join('')
}

console.log(makeUnique('hello     world'))