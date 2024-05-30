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

  const isValidEmail = (email) => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]*^[()-]*$/;
    return phoneRegex.test(phoneNumber);
  };

  const [errors, setErrors] = useState();

  let newErrors = {};

  const validateForm = () => {
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form Failed!");
    }
  };
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
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="e.g.+1 234 567 890"
            />
          </div>
          <button type="submit">Submit</button>
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
