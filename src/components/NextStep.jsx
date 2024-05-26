import React, { useHistory } from "react";

const NextStep = ({ to }) => {
  const history = useHistory();

  function handleNextPage() {
    history.push(to);
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
