// const nbYear = (p0, per, aug, p) => {
//     let numYears = 0
//     for (let i = 1; p0 < p; i++) {
//         p0 = p0 * (1 + per / 100) + aug;
//         numYears = i
//     }
//     return numYears
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000))


const nbYear = (p0, per, aug, p) => {
    let count = 0;
    per = per/100;
    while (p0 , p) {
        p0 = p0 + (p0 * per) + aug;
        count++;
    }
    return count
}
console.log(nbYear(1500000, 2.5, 10000, 2000000))