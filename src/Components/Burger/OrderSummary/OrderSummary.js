import React from "react";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  componentDidUpdate() {
    // console.log("[OrderSummary.js]componentDidUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>
            &nbsp;{this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order : </h3>
        <p>A delicious burger with the following ingredients : </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price}</strong>
        </p>
        <p>Proceed to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          PROCEED
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
