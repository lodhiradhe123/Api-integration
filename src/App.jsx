import React, { useState } from "react";
import axios from "axios";

function App() {
  const [val, setval] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setval(response.data))
      .catch((error) => console.log(error));
  };
  const addData = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => setval(res.data))
      .catch((error) => console.log(error));
  };
  console.log(val);

  return (
    <div>
      <button onClick={getData}>get Data</button>
      <br />
      <button onClick={addData}>add Data</button>
      <hr />
      {val.length>0 ?( val.map((data,index)=>(<li>{data.title}</li>))): <h1>loading</h1>}
    </div>
    
  );

  
}

export default App;
