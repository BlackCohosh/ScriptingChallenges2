const createPhoneNumber = phone => {
    let areaCode = phone.slice(0, 3).join("");
    let exchangeCode = phone.slice(3, 6).join("");
    let subscriberNum = phone.slice(6, phone.length).join("");

    return (`(${areaCode}) ${exchangeCode}-${subscriberNum}`)
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))