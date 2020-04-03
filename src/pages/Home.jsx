import React, { Component } from "react";
import ShoppingList from "../pages/ShoppingList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // functions go here

  //
  render() {
    // other functions go here

    return (
      <div className="section">
        <ShoppingList></ShoppingList>
      </div>
    );
  }
}

export default Home;
