import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <li className={classes.NavigationItem}>
        <NavLink to="/" activeClassName={classes.active} exact>
          Burger Builder
        </NavLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavLink to="/orders" activeClassName={classes.active} exact>
          Orders
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItems;
