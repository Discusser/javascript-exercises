const fibonacci = function(term) {
    term = Number(term);

    if (term < 0) return "OOPS";
    if (term === 0) return 0;

    let previous = 0;
    let current = 1;
    
    for (let i = 2; i < term + 1; i++) {
        const currentCopy = current;
        current = current + previous;
        previous = currentCopy;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
