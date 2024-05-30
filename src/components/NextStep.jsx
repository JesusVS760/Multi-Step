// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NextStep.css";
const NextStep = ({ errors, to, handleSubmit }) => {
  const navigate = useNavigate();
  function handleNextPage() {
    console.log(handleSubmit);
    console.log("Next Page");
    if (errors) {
      navigate(to);
    } else console.log("Form cannot proceed until errors are resolved!");
    navigate(to);
  }

  return (
    <form className="next-step-container">
      <button onClick={handleNextPage}>Next Step</button>
    </form>
  );
};

export default NextStep;
