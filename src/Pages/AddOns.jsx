import React from "react";
import Steps from "../components/Steps";
import PrevStep from "../components/PrevStep";
import NextStep from "../components/NextStep";
import "./AddOns.css";
import useToggle from "../hooks/useToggle";

const AddOns = () => {
  const { isClicked, handleClick } = useToggle();

  return (
    <div className="add-ons-container">
      <div className="sidebar-container">
        <Steps page={3} />
      </div>
      <div className="add-ons-content">
        <div className="add-ons-header">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </div>
        <div className="add-on-options">
          <div className="add-on-option">
            <button
              onClick={() => handleClick("onlineService")}
              className={isClicked.onlineService ? "highlight" : false}
            >
              <input
                type="checkbox"
                readOnly
                checked={isClicked.onlineService}
              />
              <div className="add-on-text">
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
            </button>
          </div>
          <div className="add-on-option">
            <button
              onClick={() => handleClick("LargerStorage")}
              className={isClicked.LargerStorage ? "highlight" : false}
            >
              <input
                type="checkbox"
                readOnly
                checked={isClicked.LargerStorage}
              />
              <div className="add-on-text">
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
            </button>
          </div>
          <div className="add-on-option">
            <button
              onClick={() => handleClick("customizableProfile")}
              className={isClicked.customizableProfile ? "highlight" : false}
            >
              <input
                type="checkbox"
                readOnly
                checked={isClicked.customizableProfile}
              />{" "}
              <div className="add-on-text">
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="next-step-button-add-on">
        <PrevStep to="/select" />
        <NextStep to="/summary" />
      </div>
    </div>
  );
};

export default AddOns;
