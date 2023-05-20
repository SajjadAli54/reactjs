import "./App.css";
import Image from "./Components/higher-order-component/classes/classHoc";

function App() {
  return (
    <div className="App">
      <Image
        url="https://picsum.photos/200/300"
        alt="random image"
        width={300}
        height={300}
        style={{
          border: "1px solid red",
          borderRadius: "50%",
          padding: 5,
          margin: 5,
        }}
      />
    </div>
  );
}

export default App;
