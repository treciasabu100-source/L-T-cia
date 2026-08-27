// Task 8

function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        if (seconds > 0) {
            callback(null, `Time remaining: ${seconds} seconds`);
        } else {
            callback("Invalid duration!", null);
        }
    }, 1000);
}

checkTimeLeftCallback(5, (error, result) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log(result);
    }
});