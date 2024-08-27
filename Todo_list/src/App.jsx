import { useState } from "react";
import "./App.css";

function App() {

 
  const { input, setinput } = useState();
  function onHandle(e) {
    e.preventDefault();
  }
  return (
    <>
      <h1>Hello DM</h1>
      <form action="" onClick={onHandle}>
        <label htmlFor="inputdata">Enter Data : </label>
        <input
          type="text"
          id="inputdata"
          onChange={(e) => setinput(e.target.value)}
        />
        <button>Add Data</button>
 
      </form>
    </>
  );
}

export default App;
