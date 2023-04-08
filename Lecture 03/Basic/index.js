class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };

    setInterval(this.updateTime, 1000);
  }
  updateTime = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  };
  render() {
    return (
      <div>
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />);
