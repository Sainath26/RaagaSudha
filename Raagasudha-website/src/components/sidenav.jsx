import React from "react";
import "../style/navbar.css";
function Sidenav() {
  return (
    <div className="sideNav">
      <div className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/classes">Classes</a></li>
          <li><a href="/pradarshana">Pradarshana</a></li>
        </ul>
        
        
        

        {console.log("control is reaching here")}
      </div>
    </div>
  );
}

export default Sidenav;
