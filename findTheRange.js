// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
var isUnique = (str) => {
    const hash = {};
    for (const i in str) {
        if (hash[str[i]]) return false;
        hash[str[i]] = true;
    }
    return true;
};

console.log(isUnique('Mozilla'))
function findTheRange('FireFox')