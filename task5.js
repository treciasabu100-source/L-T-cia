const seconds = parseInt(process.argv[2]);

if (isNaN(seconds) || seconds <= 0) {
    console.log("Please enter a valid number of seconds.");
    process.exit();
}

let remaining = seconds;

console.log(`Countdown started: ${remaining} seconds`);
console.log('Type "cancel" to stop the countdown.');

const timer = setInterval(() => {
    remaining--;

    if (remaining === 0) {
        clearInterval(timer);
        console.log("Time's up!");
        process.exit();
    }

    console.log(`Time remaining: ${remaining}`);
}, 1000);

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        process.exit();
    }
});