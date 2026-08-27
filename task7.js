// Task 7

let seconds = 5;

const timer = setInterval(() => {
    console.log("Time remaining:", seconds);

    seconds--;

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);

// Bug found using the debugger:
// The original condition was seconds > 5,
// so clearInterval() was never executed.
// Fixed the condition to seconds === 0.