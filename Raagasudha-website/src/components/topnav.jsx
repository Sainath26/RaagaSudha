//  This file contains function for top navigation

import "../style/navbar.css";
import Image from "../assets/logo.png";
function Topnav() {
  return (
    <div className="navbar">
      <img src={Image} alt="Logo" className="logo"></img>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/pradarshana">Pradarshana</a>
        <a href="/classes">Classes</a>
        <a href="/safeguarding">Policies</a>
        <a href="/directors">Directors</a>
      </div>
    </div>
  );
}

export default Topnav;
