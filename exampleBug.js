// exampleBug.js
function causeArrayBug() {
    const numbers = [1, 2, 3];
    console.log(numbers[3]); // This will cause ArrayIndexOutOfBoundsError
}

causeArrayBug();
