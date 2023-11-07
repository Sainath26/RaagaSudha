import "../style/navbar.css";

import { useState, useEffect } from "react";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{scrolled ? <Sidenav /> : <Topnav />}</div>;
}

export default Navbar;
