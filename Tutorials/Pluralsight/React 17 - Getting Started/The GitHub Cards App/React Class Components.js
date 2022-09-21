// Original code from https://jscomplete.com/playground/rgs2.1
const App = ({ title }) => (
    <div className="header">{title}</div>
);

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);


// Convert to class
class App2 extends React.Component {
    render() {
        return <div className="header">{this.props.title}</div>
    }
}


// Create a Card component
class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                One Github Profile ...
            </div>
        );
    }
}

class App3 extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}