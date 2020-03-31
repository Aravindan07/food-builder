import React from "react";
import classes from "./NavigationItems.module.css";

const NavigationItems = props => {
  return (
    <div>
      <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
          <a href="/">Burger Builder</a>
        </li>
        <li className={classes.NavigationItem}>
          <a href="/">Checkout</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;
