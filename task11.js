// Task 11: Async/Await with Try/Catch

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

async function runCountdownAsync(seconds) {
    try {
        const result = await checkTimeLeftPromise(seconds);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

runCountdownAsync(5);