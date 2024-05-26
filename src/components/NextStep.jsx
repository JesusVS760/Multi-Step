import React from "react";
import { useNavigate } from "react-router-dom";
const NextStep = () => {
  const navigate = useNavigate();

  function handleNextPage() {
    console.log("Next Page");
    navigate("/select");
  }

  return (
    <div>
      <button onClick={handleNextPage} className="next-step">
        Next Step
      </button>
    </div>
  );
};

export default NextStep;
