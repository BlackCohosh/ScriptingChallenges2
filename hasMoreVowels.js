const hasMoreVowels = (word) => {
    //Array.from(word)
    // for (i = 0, i > word.length, i++) {
    //     if (i === "a", "e", "i", "o", "u")
    // }
    const vowels = /['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I, 'O', 'U']/g;
    const constanents = /['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']/g;
    let vowelsFound = word.match(vowels);
    let constFound = word.match(constanents);

    console.log(vowelsFound)
    console.log(constFound)
    if (vowelsFound.length > constFound.length) {
       // return true
        console.log(true)
    } else {
        console.log(false)
    }
}

hasMoreVowels('Aal')