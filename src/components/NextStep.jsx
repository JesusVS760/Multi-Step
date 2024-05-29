import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextStep.css";
const NextStep = ({ to, data }) => {
  const navigate = useNavigate();

  function handleNextPage() {
    console.log("Next Page");
    console.log(data);
    navigate(to);
  }

  return (
    <div className="next-step-container">
      <button type="submit" onClick={handleNextPage} className="next-step">
        Next Step
      </button>
    </div>
  );
};

export default NextStep;
