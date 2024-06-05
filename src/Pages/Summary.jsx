import React from "react";
import { useMemo } from "react";
import "./Summary.css";
import Steps from "../components/Steps";
import PrevStep from "../components/PrevStep";
import Confirm from "../components/Confirm";
import useToggle from "../hooks/useToggle";

const Summary = ({ isToggle }) => {
  const { isClicked } = useToggle();
  // const [isToggle, setIsToggle] = useState("");

  const totalPrice = useMemo(() => {
    let total = 0;
    if (isClicked.arcadeOpt) total += 9;
    if (isClicked.advancedOpt) total += 12;
    if (isClicked.proOpt) total += 15;
    if (isClicked.onlineService) total += 1;
    if (isClicked.LargerStorage) total += 2;
    if (isClicked.customizableProfile) total += 3;
    return total;
  }, [isClicked]);

  return (
    <div className="summary-container">
      <div className="sidebar-container">
        <Steps page={4} />
      </div>
      <div className="summary-content">
        <div className="summary-header">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="summary-transaction">
          <div className="summary-plan-choice">
            <div className="summary-plan">
              <h2>
                <div>{isClicked.arcadeOpt ? "Arcade" : ""}</div>
                <div> {isClicked.advancedOpt ? "Advanced" : ""}</div>
                <div>{isClicked.proOpt ? "Pro" : ""}</div>
              </h2>
              <a href="/select">Change</a>
            </div>
            <h3 className="option-price">
              <div> {isClicked.arcadeOpt ? "$9/mo" : ""} </div>
              <div> {isClicked.advancedOpt ? "$12/mo" : ""}</div>
              <div> {isClicked.proOpt ? "$15/mo" : ""}</div>
            </h3>
          </div>
          <hr />
          <div className="summary-add-ons">
            <div>
              <p>
                <div> {isClicked.onlineService ? "Online service" : ""} </div>
                <div> {isClicked.LargerStorage ? "Larger storage" : ""} </div>
                <div>
                  {" "}
                  {isClicked.customizableProfile ? "Customizable profile" : ""}
                </div>
              </p>
            </div>
            <div>
              <p>
                <div>{isClicked.onlineService ? "+$1/mo" : ""} </div>
                <div> {isClicked.LargerStorage ? "+$2/mo" : ""}</div>
                <div>{isClicked.customizableProfile ? "+$3/mo" : ""}</div>
              </p>
            </div>
          </div>
          <hr />
          <div className="summary-total">
            <div>
              <p>Total (per month)</p>
            </div>
            <div>
              <h2 className="total-price">+${totalPrice}/mo</h2>
            </div>
          </div>
        </div>
        <div className="button-options">
          <PrevStep to={"/add-ons"} />
          <Confirm to={"/Submitted"} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
