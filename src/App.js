import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="App">
      <h1>AstroBot</h1>
      <input onChange={handleInput} />
      <button className="submitButton">Submit</button>
      <div className="inputValue">
        <p>Result:</p>
        <h3>{input}</h3>
      </div>
    </div>
  );
}

export default App;
