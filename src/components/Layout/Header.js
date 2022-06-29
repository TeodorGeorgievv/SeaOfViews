import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <img src={props.mainHeader} alt={props.heading} />
        <h1 className={classes.heading}>{props.heading}</h1>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          perferendis maxime eveniet fugiat consequuntur dolores quo porro
          minus! Deleniti, ipsa.
        </p>
      </div>
      
      <h2 className={classes.label}>{props.label}</h2>
    </Fragment>
  );
};

export default Header;
