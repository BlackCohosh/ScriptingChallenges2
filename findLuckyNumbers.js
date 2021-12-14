// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
//(That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// Write your code below this line.
function findLuckyNumbers(n) {
    var luckyArray = []
//    for (n) {
//    var luckyNum = n
    for (let i = 0; i < n; i++) {
        luckyArray.push(Math.floor(Math.random() * 10) +1)
    }  
    return luckyArray
        //return findLuckyNumbers()
}

console.log(findLuckyNumbers(6))

luckyArr = []
let i = 0

function luckyNum(n){

    while(i < n){
        let x = Math.floor((Math.randon() * 10) +1)
    }
}