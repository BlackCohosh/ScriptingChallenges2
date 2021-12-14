const sortProduct = (intArray) => {
    let procucts = [];
    intArray.forEach(element, index => { //syntax from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        let product = {
            total: element*(i+1),
            i: i
        }
        procucts.push(product)
    })
    procucts.sort((a,b) => (a.total - b.total))
    let sortedArr= []
    procucts.forEach(element => sortedArr.push(array[element.i]))
    return sortedArr
}

sortProduct([9, 5, 1, 4, 3])