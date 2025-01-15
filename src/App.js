import React from "react";
import { ButtonCounter } from "./ButtonCounter";
import { SliderCounter } from "./SliderCounter";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Demonstrating Headless React
      </h1>
      <ButtonCounter />
      <SliderCounter />
    </div>
  );
}

export default App;
