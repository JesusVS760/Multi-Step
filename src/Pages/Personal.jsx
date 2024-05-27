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
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="personal-email">
            <p>Email Address</p>
            <input type="text" placeholder="JohnSmith123@gmail.com" />
          </div>
          <div className="personal-number button-push">
            <p>Phone Number</p>
            <input type="text" placeholder="e.g.+1 234 567 890" />
          </div>
        </div>
        <div className="next-step-button">
          <NextStep to={"/select"} />
        </div>
      </div>
    </div>
  );
};

export default Personal;
