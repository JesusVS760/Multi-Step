import React from "react";
import "./Summary.css";
import Steps from "../components/Steps";
import PrevStep from "../components/PrevStep";
import Confirm from "../components/Confirm";
const Summary = () => {
  return (
    <div className="summary-container">
      <div className="sidebar-container">
        <Steps page={4} />
      </div>
      <div className="summary-content">
        <div className="summary-header">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="summary-transaction">
          <div className="summary-plan-choice">
            <div className="summary-plan">
              <h3></h3>
              <h3></h3>
            </div>
            <a href="/">Change</a>
          </div>
          <hr />
          <div className="summary-add-ons">
            <p>Map</p>
          </div>
          <div className="summary-total">
            <p>Total (per month)</p>
            <h2></h2>
          </div>
        </div>
        <div className="button-options">
          <PrevStep to={"/add-ons"} />
          <Confirm />
        </div>
      </div>
    </div>
  );
};

export default Summary;
