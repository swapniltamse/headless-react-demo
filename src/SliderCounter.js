import React from "react";
import { useCounter } from "./useCounter";

export function SliderCounter() {
  const { count, increment, decrement, reset } = useCounter(0);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue > count) {
      increment();
    } else if (newValue < count) {
      decrement();
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Slider-Based Counter</h2>
      <h1>{count}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={count}
        onChange={handleSliderChange}
        style={{ width: "300px" }}
      />
      <button onClick={reset} style={{ display: "block", marginTop: "10px" }}>
        Reset
      </button>
    </div>
  );
}
