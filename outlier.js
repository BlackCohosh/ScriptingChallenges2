const findOutlier = (intArray) => {
    let odd = [];
    let even = [];

    for (let i =0; i < intArray.length; i++) {
        let num = intArray[i];
        if (intArray[i] % 2 === 0) {
            even.push(intArray[i]);
        } else {
            odd.push(intArray[i]);
        }
    }

    if (odd.length === 1) {
        console.log(odd)
    } else{
        console.log(even)
    }
}

findOutlier([160, 3, 1719, 19, 11, 13, -21])