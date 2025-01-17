import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    const result = eval(input);
    setResult(result);
  };

  return (
    <div className="main-container">
      <div className="calculator-container">
        <input type="text" value={input} readOnly className="" />
        <div>Result: {result}</div>
        <div className="buttons-container">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "C", "="].map(
            (value, index) => (
              <button
                key={index}
                onClick={
                  value === "C" ? clearInput :
                  value === "="
                    ? calculateResult
                    : () => handleButtonClick(value.toString())
                }
              >
                {value}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
