import React from "react";
import { useMemo } from "react";
import "./Summary.css";
import Steps from "../components/Steps";
import PrevStep from "../components/PrevStep";
import Confirm from "../components/Confirm";
import useToggle from "../hooks/useToggle";

const Summary = () => {
  const { isClicked } = useToggle();

  const totalPrice = useMemo(() => {
    let total = 0;

    if (isClicked.arcadeOpt) total += 9;
    if (isClicked.advancedOpt) total += 12;
    if (isClicked.proOpt) total += 15;
    if (isClicked.onlineService) total += 1;
    if (isClicked.LargerStorage) total += 2;
    if (isClicked.customizableProfile) total += 3;
    return total;
  }, [isClicked]);

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
              <h2>
                {isClicked.arcadeOpt ? "Arcade" : ""}
                {isClicked.advancedOpt ? "Advanced" : ""}
                {isClicked.proOpt ? "Pro" : ""}
              </h2>
              <h3 className="option-price">
                {isClicked.arcadeOpt ? "$9/mo" : ""}
                {isClicked.advancedOpt ? "$12/mo" : ""}
                {isClicked.proOpt ? "$15/mo" : ""}
              </h3>
            </div>
            <a href="/select">Change</a>
          </div>
          <hr />
          <div className="summary-add-ons">
            <p>
              {isClicked.onlineService ? "Online service" : ""}
              {isClicked.LargerStorage ? "Larger storage" : ""}
              {isClicked.customizableProfile ? "Customizable profile" : ""}
            </p>
            <p>
              {isClicked.onlineService ? "+$1/mo" : ""}
              {isClicked.LargerStorage ? "+$2/mo" : ""}
              {isClicked.customizableProfile ? "+$3/mo" : ""}
            </p>
          </div>
          <div className="summary-total">
            <p>Total (per month)</p>
            <h2>${totalPrice}</h2>
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
