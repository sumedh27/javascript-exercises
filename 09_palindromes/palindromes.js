// racecar

const palindromes = function (string) {
    let alphanum = `abcdefghijklmnopqrstuvwxyz0123456789`;

    const cleanString = string.toLowerCase()
                            .split(``)
                            .filter(character => alphanum.includes(character))
                            .join(``);

    const reverseString = cleanString.split(``).reverse().join(``)

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
