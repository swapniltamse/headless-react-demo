import React from "react";
import { useCounter } from "./useCounter";

export function TextCounter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Text-Based Counter</h2>
      <p>The current count is: {count}</p>
      <a href="#" onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </a>
      <a href="#" onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </a>
      <a href="#" onClick={reset}>
        Reset
      </a>
    </div>
  );
}
