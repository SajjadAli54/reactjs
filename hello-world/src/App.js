import "./App.css";
import UseCounter from "./Components/render/counter";
import DataConsumer from "./Components/render/dataProvider";

function App() {
  return (
    <div className="App">
      <DataConsumer />
    </div>
  );
}

export default App;
