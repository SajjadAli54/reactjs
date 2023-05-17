import "./App.css";
import MyCounter from "./Components/counter/myCounter";

function App() {
  return (
    <div className="App">
      <MyCounter initialCount={6} min={0} max={10} />
    </div>
  );
}

export default App;
