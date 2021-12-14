// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const balancedParens = (str) => {
    let openParen = 0;
    let closedParen = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            openParen += 1;
        } else if (str[i] === ")") {
            closedParen +=1;
        }
    }
    if (openParen === closedParen) {
        return true
    } else {return false}
}

console.log(balancedParens("(This (is (a) balanced) string.)"))