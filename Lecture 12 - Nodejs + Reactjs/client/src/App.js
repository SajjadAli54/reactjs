import "./App.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MyTable from "./components/MyTable";
import AddUser from "./components/AddUser";

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  const url = "http://localhost:5000/api/data";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(url, { name: newData });
      console.log(response.data);
      setNewData("");
      setData([...data, { id: data.length + 1, name: newData }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log(response.data);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AddUser
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        onClick={postData}
      />

      <h1>Data</h1>
      <MyTable data={data} deleteData={deleteData} />
    </div>
  );
}

export default App;
