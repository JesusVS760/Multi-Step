import { useEffect, useState } from "react";

const useToggle = () => {
  const initialState = JSON.parse(localStorage.getItem("toggleState")) || {
    arcadeOpt: false,
    advancedOpt: false,
    proOpt: false,
    onlineService: false,
    LargerStorage: false,
    customizableProfile: false,
  };
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (button) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };
  //saving to localStorage in order to access values later on
  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(isClicked));
  }, [isClicked]);

  return { isClicked, handleClick };
};
export default useToggle;
