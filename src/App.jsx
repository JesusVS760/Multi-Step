import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./Pages/Personal";
import Select from "./Pages/Select";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index="/personal" element={<Personal />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
