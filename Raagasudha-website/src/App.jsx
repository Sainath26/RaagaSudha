//This is the entry point of the website and it contains route handlers

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Pradarshana from "./views/pradarshana";
import Safeguarding from "./views/safeguarding";
import Directors from "./views/directors";
import Classes from "./views/classes";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pradarshana" element={<Pradarshana />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/safeguarding" element={<Safeguarding />} />
          <Route path="/directors" element={<Directors />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
