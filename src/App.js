import { render } from "@testing-library/react";
import React, {useState} from "react";
import { isBlock, setSyntheticLeadingComments } from "typescript";
import { sortData, viewData, viewAll } from "./compare";
import "./style.css"

const Page = () => {
    const[loanAmount, setloanAmount] = useState('');
    const[loanTerm, setloanTerm] = useState('');
    const[repaymentType, setrepaymentType] = useState('PNI');
    const[purpose, setpurpose] = useState('ownerOccupied');

    const handleSubmit = (e) => {
      e.preventDefault();
      const input =  { loanAmount, loanTerm, repaymentType, purpose };
    }

  return (
    <div>
    <h1>PAY YOUR DEBTS</h1>

    <div className="block block-one">
      <h2>Loan</h2>

      <form onSubmit = {handleSubmit}>
      <div class="grid-container">
        <div class = "grid-item grid-item-1">
          <label>Loan Amount</label>
          <input
           type = "number"
           value = {loanAmount} 
           onChange = {(e) => setloanAmount(e.target.value)}
           required
           />
        </div>

        <div class = "grid-item grid-item-2">
          <label>Loan Term</label>
          <input 
          type = "number" 
          value={loanTerm}
          onChange = {(e) => setloanTerm(e.target.value)}
          required
          /> 
        </div>
      </div>

      <div class = "gird-item grid-item-3">
        <p1>Repayment type:</p1>
       <select
        value = {repaymentType}
        onChange = {(e) => setrepaymentType(e.target.value)}
       >
        <option value = "PNI">Principal and Interest</option>
        <option value = "interest">Interest Only</option>
       </select>
      </div>

      <div class = "gird-item grid-item-4">
       <p1>OwnerOccupied or Investment purposes</p1>
       <select
        value = {purpose}
        onChange = {(e) => setpurpose(e.target.value)}
       >
        <option value = "ownerOccupied">Owner Occupied</option>
        <option value = "investment">Investment</option>
       </select>
      </div>

      <button type = "submit"> Calculate </button>
      </form>

      <p>{loanAmount}</p>
      <p>{loanTerm}</p>
      <p>{repaymentType}</p>
      <p>{purpose}</p>


    </div>

    <div className="block block-two">
      <h2>Output</h2>
      <h3>Subtitle</h3>
      <p>Something</p>
    </div>
  </div>
  );
}

export default Page;
//export {input};
