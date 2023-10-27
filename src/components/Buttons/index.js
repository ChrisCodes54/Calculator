import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function buttonStyle(props) {
  const { numLabel } = props;

  const handleClick = () => {
    // console.log(typeof numLabel);
    
    let numValue = Number(numLabel)
    return console.log(numValue, typeof numValue)

   
  };
  return (
    <button
      className={`col btn btn-warning rounded-0 border border-dark`}
      onClick={handleClick}
    >
      {numLabel}
    </button>
  );
}

function handleZero(props) {
  const { numLabel } = props;

  const handleClick = () => {
    console.log(numLabel);

    let zeroValue = Number(numLabel)
    return zeroValue
  };
  return (
    <button
      className={`col-6 btn btn-warning rounded-0 border border-dark`}
      onClick={handleClick}
    >
      {numLabel}
    </button>
  );
}

export default function Buttons() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="w-50">
        <div className="container">
          <div className="row">
            {buttonStyle({ numLabel: "7" })}
            {buttonStyle({ numLabel: "8" })}
            {buttonStyle({ numLabel: "9" })}

            <button className="col">x</button>
          </div>

          <div className="row">
            {buttonStyle({ numLabel: "4" })}
            {buttonStyle({ numLabel: "5" })}
            {buttonStyle({ numLabel: "6" })}

            <button className="col">-</button>
          </div>

          <div className="row">
            {buttonStyle({ numLabel: "1" })}
            {buttonStyle({ numLabel: "2" })}
            {buttonStyle({ numLabel: "3" })}

            <button className="col">+</button>
          </div>

          <div className="row">
            {handleZero({ numLabel: "0" })}
            <button className="col">.</button>
            <button className="col">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
