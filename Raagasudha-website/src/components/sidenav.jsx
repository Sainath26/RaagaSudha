// This file contains function for side navigation
import "../style/navbar.css";
function Sidenav() {
  return (
    <div className="hide-on-small-screen">
      <div className="sideNav">
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pradarshana">Pradarshana</a>
            </li>
            <li>
              <a href="/classes">Classes</a>
            </li>
            <li>
              <a href="/safeguarding">Policies</a>
            </li>
            <li>
              <a href="/directors">Directors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
