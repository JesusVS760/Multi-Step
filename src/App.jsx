import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "./Pages/Personal";
import Select from "./Pages/Select";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Personal />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
