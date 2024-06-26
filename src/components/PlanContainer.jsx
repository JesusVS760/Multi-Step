import React, { useState } from "react";

const PlanContainer = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <Select
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        handleToggle={handleToggle}
      />
      <Summary isToggle={isToggle} />
    </>
  );
};

export default PlanContainer;
