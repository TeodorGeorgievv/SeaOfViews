import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      style={{
        backgroundColor: scroll ? "white" : "transparent",
        backdropFilter: scroll ? "" : "blur(25px)",
        color: scroll ? "black" : "white",
      }}
      className={classes.header}
    >
      <h1>Travel Inspo</h1>
      <nav style={{ color: scroll ? "red" : "black" }} className={classes.nav}>
        <ul>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/travel">
              Travel
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
