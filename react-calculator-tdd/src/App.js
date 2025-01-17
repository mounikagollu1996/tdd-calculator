import React, {useState} from "react";
import "./App.css";

function App() {
  const [input,setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };
  
  return (
    <div className="main-container">
      <div className="calculator-container">
        <input type="text" value={input} readOnly className=""/>
        <div>Result:</div>
        <div className="buttons-container">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "C", "="].map(
            (btn) => (
              <button onClick={()=>handleButtonClick(btn.toString())}>{btn}</button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
