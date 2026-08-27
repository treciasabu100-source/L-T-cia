// Task 10: Promise-Based Function

function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seconds > 0) {
                resolve(`Time remaining: ${seconds} seconds`);
            } else {
                reject("Invalid duration!");
            }
        }, 1000);
    });
}

checkTimeLeftPromise(5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });