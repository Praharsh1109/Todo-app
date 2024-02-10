import React, { useState, useEffect } from "react";
import Createcomponent from "./component/Createcomponent";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [data]); 

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5174/getId");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleShowComponent = async () => {
    try {
      await axios.post("http://localhost:5174/card", {
        id: name,
        description: desc,
      });
      setShowComponent(true);
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ID"
      />
      <br />
      <br />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <br />
      <br />
      <button onClick={handleShowComponent}>Sign In</button>
      {showComponent && <Createcomponent first={name} second={desc} />}
      <h2>Card IDs:</h2>
      <ol>
        {data.map((card) => (
          <li key={card._id}>{card.id}:{card.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
