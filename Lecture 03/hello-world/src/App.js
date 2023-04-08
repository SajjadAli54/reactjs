import "./App.css";
import Avatar from "./Components/Avatar";
import Table from "./Components/Table";

function App() {
  let isLogged = false;

  // Random data of 10 people
  const data = [
    {
      firstName: "Maurise",
      lastName: "Hartigan",
      age: 25,
    },
    {
      firstName: "Lorain",
      lastName: "Bartosch",
      age: 26,
    },
    {
      firstName: "Lorain",
      lastName: "Bartosch",
      age: 28,
    },
  ];

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
      <Table data={data} />
    </div>
  );
}

export default App;
