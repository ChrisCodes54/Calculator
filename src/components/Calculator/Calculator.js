import React from "react";
import Display from "./Display";
import Button from './Button'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const buttons = [
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

const ops = new Set(["x", "-", "+"]);

export default function Calculator() {
  // const [calculation, setCalculation] = useState("");
  const onClickHandler = (value) => {
    // add logic here
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="w-50">
        <div className="container">
          <div className="row">
            {/* <Display calculation={calculation} /> */}
          </div>
          {buttons.map((buttonRow) => {
            return(
              <div className="row">
                {buttonRow.map((butt) => (
                  <Button value ={butt} onClick={onClickHandler} />
                ))}

              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
