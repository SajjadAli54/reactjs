import "./App.css";
import Avatar, { Avatar2 } from "./Components/Avatar";

function App() {
  let isLogged = false;

  return (
    <div className="App">
      {isLogged ? (
        <Avatar
          url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Sun set image"
        />
      ) : (
        <Avatar
          url="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png"
          alt="Logo image"
        />
      )}
    </div>
  );
}

export default App;
