import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
