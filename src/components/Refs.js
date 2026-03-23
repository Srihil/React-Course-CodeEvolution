import React, { useRef } from "react";

function Refs() {

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Refs in Modern React</h2>

      <input type="text" ref={inputRef} placeholder="Enter your name" />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default Refs;