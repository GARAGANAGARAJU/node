// test.js
function add(a, b) {
    return a + b;
}

module.exports = add;

// Example test case
if (require.main === module) {
    console.log(add(2, 3)); // Expected output: 5
}
