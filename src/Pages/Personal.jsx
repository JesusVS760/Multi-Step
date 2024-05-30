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
    const phoneRegex =
      /^\+?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

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
    }
    if (!isValid) {
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
        <form onClick={handleSubmit} className="personal-input">
          <div className="personal-name">
            <p>Name</p>
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="John Smith"
            />
            {errors.name && <div className="errors">{errors.name}</div>}
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
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div className="personal-number button-push">
            <p>Phone Number</p>

            <input
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="e.g.+1 234 567 890"
            />
            {errors.phoneNumber && (
              <div className="errors">{errors.phoneNumber}</div>
            )}
          </div>
          <div className="next-page">
            <NextStep onClick={handleSubmit} to={"/select"} />
          </div>
        </form>
        <div className="next-step-button"></div>
      </div>
    </div>
  );
};

export default Personal;
