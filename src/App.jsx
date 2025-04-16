import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Manager from "./Pages/Manager";
import Generate from "./Pages/Generate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/generater" element={<Generate />} />
      </Routes>
    </div>
  );
}

export default App;
