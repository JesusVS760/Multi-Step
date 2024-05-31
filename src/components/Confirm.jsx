import React, { useState } from "react";
import "./Confirm.css";
import { useNavigate } from "react-router-dom";

const Confirm = ({ to }) => {
  const navigate = useNavigate();

  const handleSubmitted = () => {
    navigate(to);
  };

  return (
    <>
      <div>
        <button className="confirm-button" onClick={handleSubmitted}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default Confirm;
