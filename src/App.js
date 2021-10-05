import "./App.css";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
