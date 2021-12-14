// Write your solution below:
let pigLatin = (phrase) => {
    let words = phrase.split(' ')
    for (let i = 0; i > words.length; i++) {
        if (words[i][0] != 'a' || words[i][0] != 'e' || words[i][0] != 'i' || words[i][0] != 'o' || words[i][0] != 'u')
            words[i] += words[i][0]
            words[i] += "ay"
            words[i] = words[i].substring(1)
    }
}
