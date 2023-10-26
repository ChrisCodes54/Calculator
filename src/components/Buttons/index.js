import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

function buttonStyle(props) {
    const {numLabel} = props;
    return (
        <button className={`col btn btn-warning rounded-0 border border-dark`}>
            {numLabel}
        </button>
    )
}

export default function Buttons() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100"> 
    <div className="w-50">
      <div className="container">
        <div className="row">
          {buttonStyle({numLabel: "7"})}
          {buttonStyle({numLabel: "8"})}
          {buttonStyle({numLabel: "9"})}
          
          <button className="col">x</button>
        </div>

        <div className="row">
          <button className="col btn btn-warning rounded-0 border border-dark">4</button>
          <button className="col btn btn-warning rounded-0 border border-dark">5</button>
          <button className="col btn btn-warning rounded-0 border border-dark">6</button>
          <button className="col">-</button>
        </div>

        <div className="row">
          <button className="col btn btn-warning rounded-0 border border-dark">1</button>
          <button className="col btn btn-warning rounded-0 border border-dark">2</button>
          <button className="col btn btn-warning rounded-0 border border-dark">3</button>
          <button className="col">+</button>
        </div>

        <div className="row">
          <button className="col-8 btn btn-warning rounded-0 border border-dark">0</button>
          <button className="col">.</button>
          <button className="col">=</button>
        </div>

      </div>
      </div>
    </div>
  );
}
