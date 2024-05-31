import React from "react";
import Steps from "../components/Steps";
import "./Submitted.css";
import check from "../assets/images/icon-thank-you.svg";

const Submitted = () => {
  return (
    <div className="submitted-container">
      <div className="sidebar-container">
        <Steps page={4} />
      </div>
      <div className="submitted-content">
        <img src={check} alt="checkmark" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Submitted;
