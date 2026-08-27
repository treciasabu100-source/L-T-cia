// Task 9: setInterval() and setTimeout()

let seconds = 5;

const timer = setInterval(() => {
    console.log("Time remaining:", seconds);

    seconds--;

    if (seconds === 0) {
        clearInterval(timer);

        setTimeout(() => {
            console.log("Time's up!");
        }, 1000);
    }
}, 1000);