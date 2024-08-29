//This is the entry point of the website and it contains route handlers

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Pradarshana from "./views/pradarshana";
import Governance from "./views/governance";
import Directors from "./views/directors";
import Classes from "./views/classes";
import Community from "./views/community";
import Ramayana from "./views/ramayana";
import OneWorld from "./views/oneworld";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pradarshana" element={<Pradarshana />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ramayana" element={<Ramayana />} />
          <Route path="/oneworld" element={<OneWorld />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/directors" element={<Directors />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
