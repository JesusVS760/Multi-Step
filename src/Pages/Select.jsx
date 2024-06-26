import React, { useEffect, useState } from "react";
import Steps from "../components/Steps";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import "./Select.css";
import NextStep from "../components/NextStep";
import PrevStep from "../components/PrevStep";
import useToggle from "../hooks/useToggle";
// import PlanContainer from "../components/PlanContainer";
import "./Select.css";
const Select = ({ isToggle, handleToggle, setIsToggle }) => {
  const { isClicked, handleClick } = useToggle();

  // const handleToggle = () => {
  //   setIsToggle(isToggle === "" ? "change" : "");
  // };

  useEffect(() => {
    localStorage.setItem("plan", JSON.stringify(isToggle));
  }, [isToggle]);

  return (
    <div className="select-container">
      <div className="sidebar-container">
        <Steps page={2} />
      </div>
      <div className="select-content">
        <div className="select-header">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>
        <div className="select-billing-options">
          <div className="billing-option ">
            <button
              className={isClicked.arcadeOpt ? "highlight" : ""}
              onClick={() => handleClick("arcadeOpt")}
            >
              <img src={arcade} alt="arcade" />
              <div className="arcade-info">
                <h2>Arcade</h2>
                <p>{isToggle === "change" ? "$90/yr" : "$9/mo"}</p>
                <h4 className={isToggle === "change" ? "" : "yearly-promotion"}>
                  {" "}
                  2 months free
                </h4>
              </div>
            </button>
          </div>
          <div className="billing-option">
            <button
              className={isClicked.advancedOpt ? "highlight" : ""}
              onClick={() => handleClick("advancedOpt")}
            >
              <img src={advanced} alt="advanced" />
              <div className="arcade-info">
                <h2>Advanced</h2>
                <p> {isToggle === "change" ? "$120/yr" : "$12/mo"}</p>
                <h4 className={isToggle === "change" ? "" : "yearly-promotion"}>
                  {" "}
                  2 months free
                </h4>
              </div>
            </button>
          </div>
          <div className="billing-option">
            <button
              className={isClicked.proOpt ? "highlight" : ""}
              onClick={() => handleClick("proOpt")}
            >
              <img src={pro} alt="pro" />
              <div className="arcade-info">
                <h2>Pro</h2>
                <p>{isToggle === "change" ? "$150/yr" : "$15/mo"}</p>
                <h4 className={isToggle === "change" ? "" : "yearly-promotion"}>
                  {" "}
                  2 months free
                </h4>
              </div>
            </button>
          </div>
        </div>
        <div className="plan-option">
          <h2
            className={
              isToggle === "change" ? "promotion-grayed" : "promotion-bold"
            }
          >
            Monthly
          </h2>

          <label class="switch">
            <input type="checkbox" onChange={handleToggle} />
            <span class="slider round"></span>
          </label>
          <h2
            className={
              isToggle === "change" ? "promotion-bold" : "promotion-grayed"
            }
          >
            Yearly
          </h2>
        </div>
        <div className="next-step-button">
          <PrevStep to="/" />
          <NextStep to="/add-ons" />
        </div>
      </div>
    </div>
  );
};

export default Select;
