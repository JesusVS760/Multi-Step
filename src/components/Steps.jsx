import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="step-card">
      <div className="step-content">
        <div className="step1 step">
          <div className="step-image">
            <span>1</span>
          </div>
          <div className="step-info">
            <h3>step 1</h3>
            <h2>your info</h2>
          </div>
        </div>
        <div className="step2 step">
          <div className="step-image">
            <span>2</span>
          </div>
          <div className="step-info">
            <h3>step 2</h3>
            <h2>select plan</h2>
          </div>
        </div>
        <div className="step3 step">
          <div className="step-image">
            <span>3</span>
          </div>
          <div className="step-info">
            <h3>step 3</h3>
            <h2>add-ons</h2>
          </div>
        </div>
        <div className="step4 step">
          <div className="step-image">
            <span>4</span>
          </div>
          <div className="step-info">
            <h3>step 4</h3>
            <h2>summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
