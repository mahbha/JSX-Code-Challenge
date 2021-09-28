//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Mahesh";
const lName = "Bhatt";
var Year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1> Hello {fName + " " + lName}!</h1>
    <h1>
      {" "}
      Hello {fName} {lName}!
    </h1>
    <h1> Hello {`${fName} ${lName}`}!</h1>
    <p>Created by {fName + " " + lName} </p>

    <p>Copyright {Year}</p>
  </div>,
  document.getElementById("root")
);
