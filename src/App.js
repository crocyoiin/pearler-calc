import { render } from "@testing-library/react";
import React, {useState, useRef} from "react";
import { isBlock, setSyntheticLeadingComments } from "typescript";
import { sortData, viewData, viewAll } from "./compare";
import { calcData } from "./calculate.ts";
import OutputWindow  from "./output";
import { clear } from "./datastore.ts";
import "./style.css"

const Page = () => {
    const[loanAmount, setloanAmount] = useState('');
    const[loanTerm, setloanTerm] = useState('');
    const[repaymentType, setrepaymentType] = useState('PNI');
    const[purpose, setpurpose] = useState('ownerOccupied');

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleCalc = (e) => {
      e.preventDefault();
      const input =  { loanAmount, loanTerm, repaymentType, purpose };
      clear();
      let dataArray = calcData(input);
      let sortedData = sortData(dataArray);
      viewData(sortedData);
      viewAll(sortedData);
      forceUpdate();
    }

  return (
    <div>
    <h1>PAY YOUR DEBTS</h1>

    <div className="block block-one">
      <h2>Loan</h2>

      <form>
      <div className="grid-container">
        <div className = "grid-item grid-item-1">
          <label>Loan Amount</label>
          <input
           type = "number"
           value = {loanAmount} 
           onChange = {(e) => setloanAmount(e.target.value)}
           required
           />
        </div>

        <div className = "grid-item grid-item-2">
          <label>Loan Term</label>
          <input 
          type = "number" 
          value={loanTerm}
          onChange = {(e) => setloanTerm(e.target.value)}
          required
          /> 
        </div>
      </div>

      <div className = "gird-item grid-item-3">
        <p1>Repayment type:</p1>
       <select
        value = {repaymentType}
        onChange = {(e) => setrepaymentType(e.target.value)}
       >
        <option value = "PNI">Principal and Interest</option>
        <option value = "interest">Interest Only</option>
       </select>
      </div>

      <div className = "gird-item grid-item-4">
       <p1>OwnerOccupied or Investment purposes</p1>
       <select
        value = {purpose}
        onChange = {(e) => setpurpose(e.target.value)}
       >
        <option value = "ownerOccupied">Owner Occupied</option>
        <option value = "investment">Investment</option>
       </select>
      </div>

      <button onClick={handleCalc}> Calculate </button>
      </form>
    </div>

    <div className="block block-two">

     <OutputWindow />
      
    </div>
  </div>
  );
}

export default Page;