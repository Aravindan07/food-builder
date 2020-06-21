import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "block",
          width: "200px",
          margin: "10px 0",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        {ig.name} ({ig.amount})<br></br>
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>
        <b>
          <u>Ingredients</u>
        </b>{" "}
        <br></br> {ingredientOutput}
      </p>
      <p>
        Price : <strong>Rs : {props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
