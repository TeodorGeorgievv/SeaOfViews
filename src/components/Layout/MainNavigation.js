import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import BookData from "../../Data.json";

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
      <NavLink
        style={{ color: scroll ? "black" : "white", textDecoration: "none" }}
        to="/"
      >
        <h1>Sea of Views</h1>
      </NavLink>
      <nav style={{ color: scroll ? "" : "black" }} className={classes.nav}>
        <ul>
          <li>
            <SearchBar placeholder="Enter a country" data={BookData} />
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
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
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/seaofviews/"
            >
              <i className={"fa-brands fa-instagram"}></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
