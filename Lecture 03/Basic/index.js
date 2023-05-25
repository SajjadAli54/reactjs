class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString(), name: "Ali" };

    setInterval(this.updateTime, 1000);
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  componentDidUpdate() {
    console.log("App Updated");
  }

  componentWillUnmount() {
    console.log("App Unmounted");
  }

  updateTime = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  };
  render() {
    return (
      <div>
        <h1>{this.state.date}</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

function App2(props) {
  const [name, setName] = React.useState("Ali");
  const [date, setDate] = React.useState(new Date().toLocaleTimeString());

  // setInterval(updateTime, 1000);

  React.useEffect(() => {
    console.log("App Mounted");

    return () => {
      console.log("App Unmounted");
    };
  });

  React.useEffect(() => {
    console.log("App name Updated");
  }, [name]);

  return (
    <div>
      <h1 onClick={() => setDate(new Date().toLocaleTimeString())}>{date}</h1>
      <h1 onClick={() => setName(name == "Ali" ? "Sajjad" : "Ali")}>{name}</h1>
    </div>
  );
}

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App2 />);
