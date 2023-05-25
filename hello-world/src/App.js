import "./App.css";
import Main from "./Components/context-api/main";
import UseFunctional from "./Components/defaultArguments/functional";
import ClassComponent from "./Components/defaultArguments/classCom";
import Counter from "./Components/reducers/reducers";
import FC from "./Components/defaultArguments/fc";

function App() {
  return (
    <div className="App">
      <FC name={"Ali"} />
    </div>
  );
}

export default App;
