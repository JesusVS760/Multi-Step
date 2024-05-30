import React, { useState } from "react";
import "./Personal.css";
import Steps from "../components/Steps";
import NextStep from "../components/NextStep";

const Personal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="personal-container">
      <div className="sidebar-container">
        <Steps page={1} />
      </div>
      <div className="personal-content">
        <div className="personal-header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit} className="personal-input">
          <div className="personal-name">
            <p>Name</p>
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="John Smith"
            />
          </div>
          <div className="personal-email">
            <p>Email Address</p>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={formData.email}
              placeholder="JohnSmith123@gmail.com"
            />
          </div>
          <div className="personal-number button-push">
            <p>Phone Number</p>
            <input
              onChange={handleChange}
              type="email"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="e.g.+1 234 567 890"
            />
          </div>
          <NextStep type="submit" to={"/select"} />
        </form>
        <div className="next-step-button">
          {/* <NextStep type="submit" to={"/select"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Personal;
