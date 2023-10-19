import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Pradarshana from "./views/pradarshana";
import Classes from "./views/classes";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/pradarshana" element={<Pradarshana />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
