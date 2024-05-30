// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextStep.css";
const NextStep = ({ to, handleSubmit }) => {
  const navigate = useNavigate();

  function handleNextPage() {
    console.log(handleSubmit);
    console.log("Next Page");
    navigate(to);
  }

  return (
    <form className="next-step-container">
      <button onClick={handleNextPage} className="next-step">
        Next Step
      </button>
    </form>
  );
};

export default NextStep;
