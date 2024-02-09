import React, { useState } from 'react';
import Createcomponent from './component/Createcomponent';
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)} placeholder='ID' /><br/><br/>
      <input type='text' onChange={(e) => setDesc(e.target.value)} placeholder='Description'/><br/><br/>
      <button onClick={handleShowComponent}>Sign In</button>
      
      {showComponent && <Createcomponent first={name} second={desc} />}
    </div>
  );
}

export default App;
