//Task 2
console.log("Starting countdown app...");

// V8 executes JavaScript code.
// libuv handles asynchronous operations such as timers
// while Node.js continues executing other code.

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("This message prints before the timer");