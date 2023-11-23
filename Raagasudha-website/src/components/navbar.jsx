// This file contains function conditionally rendering the navigation bar according to the position of the cursor
import "../style/navbar.css";
import { useState, useEffect } from "react";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
function Navbar() {
  //Logic for calculating the position of the cursor
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const threshold = 10; // threshold value here

  const handleScroll = () => {
    const position = window.scrollY;
    const scrollingUp = position < lastScrollTop;
    setScrollPosition(position);
    setLastScrollTop(position);
    console.log(scrollPosition);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
