import React, { useState } from "react";
import Steps from "../components/Steps";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import "./Select.css";
import NextStep from "../components/NextStep";
const Select = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else if (isClicked) {
      setIsClicked(false);
    }
  };
  return (
    <div className="select-container">
      <div className="sidebar-container">
        <Steps />
      </div>
      <div className="select-content">
        <div className="select-header">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="select-billing-options">
          <div className="billing-option ">
            <button
              className={isClicked ? "highlight" : ""}
              onClick={handleClick}
            >
              <img src={arcade} alt="arcade" />
              <div className="arcade-info">
                <h2>Arcade</h2>
                <p>$9/mo</p>
              </div>
            </button>
          </div>
          <div className="billing-option">
            <button
              className={isClicked ? "highlight" : ""}
              onClick={handleClick}
            >
              <img src={advanced} alt="advanced" />
              <div className="arcade-info">
                <h2>Advanced</h2>
                <p>$12/mo</p>
              </div>
            </button>
          </div>
          <div className="billing-option">
            <button
              className={isClicked ? "highlight" : ""}
              onClick={handleClick}
            >
              <img src={pro} alt="pro" />
              <div className="arcade-info">
                <h2>Pro</h2>
                <p>$15/mo</p>
              </div>
            </button>
          </div>
        </div>
        <div className="plan-option">
          <label class="switch">
            <h2>Monthly</h2>
            <input type="checkbox" />
            <span class="slider round"></span>
            <h2>Yearly</h2>
          </label>
        </div>
        <div className="next-step-button">
          <NextStep />
        </div>
      </div>
    </div>
  );
};

export default Select;
