import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <div>
        <button onClick={() => setCount(count - 1)}>reduce</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </>
  );
};

export default UseState;
