import "../style/navbar.css";

import { useState, useEffect } from "react";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const threshold = 10; // Set your threshold value here

  const handleScroll = () => {
    const position = window.scrollY;
    const scrollingUp = position < lastScrollTop;

    setScrollPosition(position);
    setLastScrollTop(position);

    if (scrollingUp && position < threshold) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5) {
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
