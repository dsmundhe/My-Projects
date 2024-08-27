import { useState } from "react";
import "./App.css";
useState;
function App() {
  const [color, setcolor] = useState("show");
  const [color1, setcolor1] = useState("show");
  const Showhide = () => {
    if (color === "show") {
      setcolor("list");
      setcolor1('Show')
    } else {
      setcolor("show");
      setcolor1('hide')
    }
  };
  return (
    <>
      <button onClick={Showhide}>{color1}</button>
      <ul className={color}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Media</li>
      </ul>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat totam dolorum labore perspiciatis adipisci ipsam pariatur dolores ut, eaque magnam velit exercitationem, optio unde quidem reiciendis, ab corrupti! Nemo, vel?</p>
      </div>
    </>
  );
}

export default App;
