const dnaStrand = (str) => {
    var comp = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            comp.push("T")
        }
        else if (str[i] === "T") {
            comp.push("A")
        }
        else if (str[i] === "C") {
            comp.push("G")
        } 
        else if (str[i] === "G") {
            comp.push("C")
        }
    }
    return comp.join("");
}

console.log(dnaStrand("ATTGC"))