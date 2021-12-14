const perfectSquare = (sq) => {
    if (Number.isInteger(Math.sqrt(sq))) { // If the 
        return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
    }
    else return -1
}

console.log(perfectSquare(9))