const smallestDiff = (arrOne, arrTwo) => {
    arrOne = arrOne.sort((a, b) => a - b)
    arrTwo = arrTwo.sort((a, b) => a - b)

    let best = null

    let indexOne = 0
    let indexTwo = 0

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        let diff = arrOne[indexOne] - arrTwo[indexTwo]

        if (diff === 0) {
            return 0
        }

        if (best === null || diff < best) {
            best = diff
        }

        if (arrOne[indexOne] > arrTwo[indexTwo]) {
            indexTwo++
        } else {
            indexOne++
        }
    }

    return best
}



let j = [30, 23, 54, 33, 96]
let s = [10, 20, 14, 16, 18]

console.log(smallestDiff(j,s))