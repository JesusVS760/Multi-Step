import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./Pages/Personal";
import Select from "./Pages/Select";
import "./App.css";
import AddOns from "./Pages/AddOns";
import Summary from "./Pages/Summary";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Personal />} />
          <Route path="select" element={<Select />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
