import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrevStep.css";

const PrevStep = ({ to }) => {
  const navigate = useNavigate();

  function handlePrevPage() {
    navigate(to);
  }
  return (
    <div className="prev-step-container">
      <button className="go-back-button" onClick={handlePrevPage}>
        Go Back
      </button>
    </div>
  );
};

export default PrevStep;
