import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="calculator-container">
        <input type="text" value="" readOnly className=""/>
        <div>result:</div>
        <div className="buttons-container">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "C", "="].map(
            (btn) => (
              <button>{btn}</button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
