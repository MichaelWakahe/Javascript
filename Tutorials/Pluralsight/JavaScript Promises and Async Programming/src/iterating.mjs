import setText , {appendText} from './results.mjs';

// Async/await is syntactic sugar for promises
// The two keywords: async and await

// "await" pauses the execution of an asynchronous function while it awaits for the promise to be fulfilled
// It can only be used from within an async function
// It only blocks the current function but not the calling function. See the example below

/*
const getNames = async () => {
    await someFunc();
    doSomethingElse();
    // Here the doSomethingElse function will have to wait on someFunc to complete
}

getNames();
getAddresses(); // This function will not wait on someFunc in getNames to complete
*/

export async function get() {
    // You can use the 'await' keyword on functions that return promises
    const { data } = await axios.get("http://localhost:3000/orders/1");
    setText(JSON.stringify(data));

    /*
        The above is equivalent to:
        axios.get("http://localhost:3000/orders/1")
            .then(({ data }) => {
                setText(JSON.stringify(data));
            });

        Refer to the first function of consuming.mjs
    */
}

/**
 * How to handle errors with async/await
 */
export async function getCatch() {
    try {
        const { data } = await axios.get("http://localhost:3000/orders/123");   // an invalid endpoint
        setText(JSON.stringify(data));
    } catch (error) {
        setText(error);
    }
}

export async function chain() {
    const { data } = await axios.get("http://localhost:3000/orders/1");
    const { data: address } = await axios.get(  // "data: address" destructures to "data" then assigns it to a variable "address"
        `http://localhost:3000/addresses/${data.shippingAddress}`
    );

    setText(`City: ${JSON.stringify(address.city)}`);

    // In the above code, the addresses are called sequentially

    /*
    The above has the same effect as below:

    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            // You must have a `return` in the statement above
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        });
    */
}

export async function concurrent() {
    const orderStatuses = axios.get("http://localhost:3000/orderStatuses"); // This call takes 1.5 seconds to complete
    const orders = axios.get("http://localhost:3000/orders");
    // We didn't add "await" to the constants above. This allows both network calls to kick off at once

    setText("");

    const { data: statuses } = await orderStatuses;
    const { data: order } = await orders;

    appendText(JSON.stringify(statuses));
    appendText(JSON.stringify(order[0]));
}

export async function parallel() {
    setText("");

    await Promise.all([
        // The first promise
        (async () => {
            const { data } = await axios.get("http://localhost:3000/orderStatuses");
            appendText(JSON.stringify(data));
        })(),

        // The second promise
        (async () => {
            const { data } = await axios.get("http://localhost:3000/orders");
            appendText(JSON.stringify(data[0]));
        })()]);
}


