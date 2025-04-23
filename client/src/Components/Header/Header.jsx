import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className={classes.header}>
        <h1>Ethio-Fuel</h1>
        <div className={classes.header_right}>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="">
            <h3>Booking</h3>
          </Link>
          <Link to="">
            <h3>Help</h3>
          </Link>
          <Link to="">
            <h3>Sign Up</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
