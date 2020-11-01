import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("initialValue");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <input onChange={handleInput} />
      <button>Submit</button>
      <div>{input}</div>
    </div>
  );
}

export default App;
