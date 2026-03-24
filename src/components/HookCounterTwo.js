import React, { useState } from "react";

function HookCounterTwo() {

  const [count, setCount] = useState(0);

  const incrementFive = () => {
    // for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 5);
    
  };
  

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;