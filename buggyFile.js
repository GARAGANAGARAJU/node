function buggyFunction() {
    var unusedVar = 42;
    if(true) {
        console.log('This is buggy code');
        // No return statement
    }
}

buggyFunction();
