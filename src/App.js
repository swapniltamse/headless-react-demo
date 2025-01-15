
import React from "react";
import { useCounter } from "./useCounter";
import { CounterUI } from "./CounterUI";

function App() {
  const counter = useCounter(0);

  return (
    <div>
      <CounterUI {...counter} />
    </div>
  );
}

export default App;
