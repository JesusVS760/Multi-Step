import React from "react";
import { useNavigate } from "react-router-dom";
import "./NextStep.css";
const NextStep = ({ to }) => {
  const navigate = useNavigate();

  function handleNextPage() {
    console.log("Next Page");
    navigate(to);
  }

  return (
    <div className="next-step-container">
      <button onClick={handleNextPage} className="next-step">
        Next Step
      </button>
    </div>
  );
};

export default NextStep;
