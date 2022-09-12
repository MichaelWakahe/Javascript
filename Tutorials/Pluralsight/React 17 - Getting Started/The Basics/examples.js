/**
 * Paste the examples below in the playground: https://jscomplete.com/playground
 */

/** Your First React Component */
// Example 1
document.getElementById('mountNode').innerHTML = 'Michael';


// Example 2
function Hello() {
	return <div>Hello Mike!</div>;
}

ReactDOM.render(
  <Hello />, 
  document.getElementById('mountNode'),
);


// Example 3
function Button() {
    return <button>TEST</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);


/** Your First React Hook */
function logRandom() {
    console.log(Math.random());
}

function Button() {
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(0); // The 'useState' is called a 'Hook'
 
    // return <button onClick={logRandom}>{counter}</button>;  // Don't specify the function as "logRandom()"

    // Alternative way of the above is to paste the logRandom function in the curly braces
    return <button onClick={
        function logRandom() {
            console.log(Math.random());
        }

        // Alternatively:
        // () => console.log(Math.random())
    }>{counter}</button>;
}

function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);


/** Your First One-way Data Flow */
function Button() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => setCounter(counter + 1);

    return (
        <button onClick={handleClick}>
            {counter}
        </button>);
}

function Display() {
    return(
        <div>....</div>
    )
}

ReactDOM.render(
    [<Button />, <Display />],
    document.getElementById('mountNode'),
);

// An alternative to the above
ReactDOM.render(
    <div>
        <Button />
        <Display />
    </div>,
    document.getElementById('mountNode'),
);
// The tag "<div>" above can be replaced by "React.Fragment" or "<>"

// Example 2
function Button(props) {
    //const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>);
}

function Display(props) {
    return (
        <div>{props.message}</div>
    )
}

function App() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter + 1);

    return (
        <div>
            <Button onClickFunction={incrementCounter} />
            <Display message={counter} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);


/** Components Reusability */
function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>);
}

function Display(props) {
    return (
        <div>{props.message}</div>
    )
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (num) => setCounter(counter + num);

    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);