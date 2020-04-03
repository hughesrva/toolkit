import React, { Component } from "react";
import ShoppingEntryForm from "../components/ShoppingEntryForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // functions go here

  //
  render() {
    // other functions go here

    return (
      <div>
        <div className="section">
          <ShoppingEntryForm></ShoppingEntryForm>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
