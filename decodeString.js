// Write your code below this line

let decodeString = (codeString) => {

    let shifter = Number(codeString[0])

    let message = ""

    //let charcode = 0

    for (i = 1; i < decodeString.length; i++) {

    asciiVal = (codeString[i].charCodeAt()) + shifter; // Used code template from S.O. 33084862
    message += String.fromCharCode(asciiVal);
}
return message;  
}

console.log(decodeString("1a"))
