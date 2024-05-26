import React from "react";
import "./Personal.css";
import Steps from "../components/Steps";
import NextStep from "../components/NextStep";

const Personal = () => {
  return (
    <div className="personal-container">
      <div className="sidebar-container">
        <Steps />
      </div>
      <div className="personal-content">
        <div className="personal-header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="personal-input">
          <div className="personal-name">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="personal-email">
            <p>Email Address</p>
            <input type="text" />
          </div>
          <div className="personal-number">
            <p>Phone Number</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="next-step"></div>
      <div className="next-step-button">
        <NextStep to="/select" />
      </div>
    </div>
  );
};

export default Personal;
