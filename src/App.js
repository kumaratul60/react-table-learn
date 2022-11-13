import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import axios from "axios";
import "./Table.css"
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios("https://giftea.github.io/proj-data/mock.json").catch((err) => console.log(err));
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    // fetchData();  // 2 time run
    return () => {
      fetchData();  // run and destroy 
    }
  }, []);
  return (
    <div className="container">
      <Table mockData={ data } />
    </div>
  );
}
export default App;