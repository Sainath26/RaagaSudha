//  This file contains function for top navigation

import "../style/navbar.css";
import Image from "../assets/logo.png";
function Topnav() {
  return (
    <div className="navbar">
      <img src={Image} alt="Logo" className="logo"></img>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/classes">Classes</a>
        <a href="/pradarshana">Pradarshana</a>
        <a href="/safeguarding">Safeguarding Policy</a>
      </div>
    </div>
  );
}

export default Topnav;
