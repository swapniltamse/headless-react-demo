import React from "react";
import { ButtonCounter } from "./ButtonCounter";
import { SliderCounter } from "./SliderCounter";
import { TextCounter } from "./TextCounter";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Demonstrating Headless React
      </h1>
      <ButtonCounter />
      <SliderCounter />
      <TextCounter />
    </div>
  );
}

export default App;
