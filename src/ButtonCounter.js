import React from "react";
import { useCounter } from "./useCounter";

export function ButtonCounter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Button-Based Counter</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
