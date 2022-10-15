import setText, {appendText, showWaiting, hideWaiting} from './results.mjs';


export function get() {
    axios.get("http://localhost:3000/orders/1")
    .then(({ data }) => {
        setText(JSON.stringify(data));
    });
}


export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
        .then(({ data }) => {
            setText(JSON.stringify(data));
        })
        .catch(err => setText(err));
}


export function chain() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            // You must have a `return` in the statement above
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        });
}


export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            // The lack of a `return` in the statement above causes an error to be thrown.
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
            // If the statement above has an error, the `catch` below will still catch it.

        }).catch(err => setText(err));


    // Below we throw an error
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
            // The lack of a `return` in the statement above causes an error to be thrown.

            throw new Error("Error getting address");
        })
        .catch(err => {
                setText(err);
                return { data: {} };    // We still need to return something
            }
        )
        .then(({ data }) => {
            setText(`City: ${data.city}`);
            // If the statement above has an error, the `catch` below will still catch it.

        })
        .catch(err => setText(err));
}


export function final() {
    showWaiting();

    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        })
        .catch(setText)
        .finally(() => {
            setTimeout(() => {
                hideWaiting();
            }, 1500);
            appendText(' -- COMPLETELY DONE');
        });
}