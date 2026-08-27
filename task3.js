//Task3
// Methods used: setInterval(), clearInterval()
let seconds = 5;
const timer = setInterval(() => {
    console.log("Time remaining:", seconds);

    seconds--;

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);