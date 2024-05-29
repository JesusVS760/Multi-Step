import { useState } from "react";

const useToggle = () => {
  const [isClicked, setIsClicked] = useState({
    arcadeOpt: false,
    advancedOpt: false,
    proOpt: false,
    onlineService: false,
    LargerStorage: false,
    customizableProfile: false,
  });

  const handleClick = (button) => {
    setIsClicked((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key, value]) => [
          key,
          key === button ? !value : false,
        ])
      ),
    }));
  };
  return { isClicked, handleClick };
};
export default useToggle;
