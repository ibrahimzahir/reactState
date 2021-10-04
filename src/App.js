import "./App.css";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function documentCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button>-</button>
      <p>You clicked 0 times</p>
      <button>+</button>
    </div>
  );
}

export default App;
