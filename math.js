function addieren(a, b) {
    return a + b;
}

function subtrahieren(a, b) {
    return a - b;
}

function multiplizieren(a, b) {
    return a * b;
}

function dividieren(a, b) {
    if (b === 0) {
        return 'Division durch 0 ist nicht erlaubt!';
    }
    return a / b;
}

console.log("Addition: " + addieren(5, 3)); 
console.log("Subtraktion: " + subtrahieren(5, 3)); 
console.log("Multiplikation: " + multiplizieren(5, 3)); 
console.log("Division: " + dividieren(5, 3));     

module.exports = { addieren, subtrahieren, multiplizieren, dividieren };