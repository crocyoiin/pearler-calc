import { render } from "@testing-library/react";
import React, {useState} from "react";
import { isBlock } from "typescript";
import "./style.css"

const userInput = () => {

  return (
    <div>
    <h1>PAY YOUR DEBTS</h1>

    <div className="block block-one">
      <h2>Loan</h2>

      <form name= "userInput" method = "post">
      <div class="grid-container">
        <div class = "grid-item grid-item-1">
          <label>Loan Amount</label>
          <input type = "number" id = "loanAmount" name = "loanAmount" required/>
        </div>

        <div class = "grid-item grid-item-2">
          <label>Loan Term</label>
          <input type = "number" id = "loanTerm" name = "loanTerm" required/> 
        </div>
      </div>

      <div class = "gird-item grid-item-3">
        <p1>Repayment type:</p1>
       <select>
        <option value = "PNI">Principal and Interest</option>
        <option value = "interest">Interest Only</option>
       </select>
      </div>

      <div class = "gird-item grid-item-4">
       <p1>OwnerOccupied or Investment purposes</p1>
       <select>
        <option value = "ownerOccupied">Owner Occupied</option>
        <option value = "investment">Investment</option>
       </select>
      </div>

      <button type = "submit" value = "Submit"> Calculate </button>
      </form>


    </div>

    <div className="block block-two">
      <h2>Title 03</h2>
      <h3>Subtitle</h3>
      <p>Something</p>
    </div>
  </div>
  );
}

export default userInput;
