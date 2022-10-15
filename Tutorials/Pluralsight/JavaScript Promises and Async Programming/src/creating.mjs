import setText, { appendText } from "./results.mjs";

export function timeout() {
    // A promise takes a function as the one and only argument to its constructor
    // This function is called the "executor function"
    // The executor function takes up to 2 parameters - one called when the promise is fulfilled and another for rejected

    let wait = new Promise((resolve) => { // can also be declared as a `const`
        setTimeout(() => {
            resolve("Timeout");
        }, 1500);
    });
    // At this point the promise is in the pending state

    //wait.then(text => setText);   // This does not work
    wait.then(setText);
}


export function interval() {

    let counter = 0;

    let wait = new Promise((resolve) => {
        setInterval(() => {
            console.log("INTERVAL");
            counter = counter + 1;
            resolve(`Timeout! ${counter}`);
        }, 1500);
    });

    wait.then(setText)
        .finally(() => appendText(` -- Done ${counter}`));

    /*
    The lesson here:
    Once a promise is settled, its state is not updated
    */
}

export function clearIntervalChain() {
    let counter = 0;
    let interval;

    let wait = new Promise((resolve) => {
        interval = setInterval(() => {
            console.log("INTERVAL");
            counter = counter + 1;
            resolve(`Timeout! ${counter}`);
        }, 1500);
    });

    wait.then(setText)
        .finally(() => clearInterval(interval));    // this stops the interval
                                                    // See the definition here: https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
}

export function xhr() {
    let request = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/7");
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => {
            reject("Request failed!");
        };
        xhr.send();
    });

    request.then(setText).catch(setText);
}

export function allPromises() {
    // All the variables below are promises. They are eagerly evaluated (as soon as they are declared)
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    //let address = axios.get("http://localhost:3000/addressTypes");    // The above three addresses are valid but this one is invalid


    // Below is a demonstration of waiting for all promises to resolve before continuing
    Promise.all([categories, statuses, userTypes])
        .then(([cat, stat, type]) => {
            setText("");
            appendText(JSON.stringify(cat.data));
            appendText(JSON.stringify(stat.data));
            appendText(JSON.stringify(type.data));
            //appendText(JSON.stringify(address.data)); // enabling this means one of four ends up in a rejected state
                                                        // the catch statement will be used to catch this error
        })
        .catch(reasons => {
            setText(reasons);
        });
}

export function allSettled() {
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    let address = axios.get("http://localhost:3000/addressTypes");


    Promise.allSettled([categories, statuses, userTypes, address]) // Different from the Promise.all above
        .then(values => {
            let results = values.map(v => {
                if (v.status === "fulfilled") {
                    return `FULFILLED: ${JSON.stringify(v.value.data[0])}`;
                }

                return `REJECTED: ${v.reason.message}`;
            });

            setText(results);
        })

        // Promise.allSettled doesn't need a catch block but it is still recommended to have one
        .catch(reasons => {
            setText(reasons);
        });
}

export function race() {
    // Here we want data from the fastest source, with all endpoints sending back identical data

    let users = axios.get("http://localhost:3000/users");
    let backupUsers = axios.get("http://localhost:3001/users");

    Promise.race([users, backupUsers])
        .then(users => setText(JSON.stringify(users.data)))
        .catch(reason => setText(reason));

    // race will stop when the first promise settles. If the first promise is rejected, the it will go to the catch block
}
