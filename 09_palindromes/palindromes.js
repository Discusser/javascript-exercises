const palindromes = function(string) {
    string = string.toLowerCase().replaceAll(/[,.!? ]/g, "");

    return string.slice(0, Math.ceil(string.length / 2)).split("").reverse().join("") === string.slice(Math.floor(string.length / 2));
};

// Do not edit below this line
module.exports = palindromes;
