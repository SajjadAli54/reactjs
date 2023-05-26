import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return data;
};

function UseCustom() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  const liStyle = {
    listStyle: "none",
    padding: "1rem",
    margin: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id} style={liStyle}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default UseCustom;
