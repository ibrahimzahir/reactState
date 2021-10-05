import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="container md:mx-auto mt-40">
      <div className="flex space-x-2">
        <button onClick={decrementCount} className="border rounded-md px-2">
          -
        </button>
        <p className="">You clicked {count} times</p>
        <button onClick={incrementCount} className="border rounded-md px-2">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
