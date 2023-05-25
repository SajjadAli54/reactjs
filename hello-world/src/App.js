import "./App.css";
import Main from "./Components/context-api/main";
import UseFunctional from "./Components/defaultArguments/functional";
import ClassComponent from "./Components/defaultArguments/classCom";
import Counter from "./Components/reducers/reducers";
import FC from "./Components/defaultArguments/fc";
import { MyComponent } from "./Components/this_binding/component";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
