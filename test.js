// test.js
const config = {
    username: "user",
    password: "password123" // Hardcoded password - should be flagged
};

// This function intentionally accesses an undefined variable
function triggerError() {
    console.log(undeclaredVariable); // This will cause a ReferenceError
}

triggerError();
