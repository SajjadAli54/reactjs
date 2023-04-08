class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    setInterval(this.updateTime, 1000);
  }
  updateTime = () => {
    this.setState({ count: new Date().toLocaleTimeString() });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />);
