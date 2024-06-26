import React from "react";
import "./Steps.css";

const Steps = ({ page }) => {
  const pageHigh = page;
  return (
    <div className="step-card">
      <div className="step-content">
        <div className="step1 step">
          <div className="step-image">
            <button className={pageHigh === 1 ? "active" : ""}>1</button>
          </div>
          <div className="step-info">
            <h3 className="steps ">step 1</h3>
            <h2>your info</h2>
          </div>
        </div>
        <div className="step2 step">
          <div className="step-image">
            <button className={pageHigh === 2 ? "active" : ""}>2</button>
          </div>
          <div className="step-info">
            <h3 className="steps">step 2</h3>
            <h2>select plan</h2>
          </div>
        </div>
        <div className="step3 step">
          <div className="step-image">
            <button className={pageHigh === 3 ? "active" : ""}>3</button>
          </div>
          <div className="step-info">
            <h3 className="steps">step 3</h3>
            <h2>add-ons</h2>
          </div>
        </div>
        <div className="step4 step">
          <div className="step-image">
            <button className={pageHigh === 4 ? "active" : ""}>4</button>
          </div>
          <div className="step-info">
            <h3 className="steps">step 4</h3>
            <h2>summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
