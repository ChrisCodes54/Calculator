import React from "react";
import "./index.css";
export default function Buttons() {
  return (
    <>
      <container className="container">
        <div className="row">
          <button className="col">7</button>
          <button className="col">8</button>
          <button className="col">9</button>
          <button className="col">x</button>
        </div>

        <div className="row">
          <button className="col">4</button>
          <button className="col">5</button>
          <button className="col">6</button>
          <button className="col">-</button>
        </div>

        <div className="row">
          <button className="col">1</button>
          <button className="col">2</button>
          <button className="col">3</button>
          <button className="col">+</button>
        </div>

        <div class="row">
          <button class="col-8">0</button>
          <button className="col">.</button>
          <button className="col">=</button>
        </div>

      </container>
    </>
  );
}
