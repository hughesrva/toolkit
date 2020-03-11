import React, { Component } from "react";

class FunctionalComponent extends Component {
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
        <div className="container">
          {/* New Item entry form input */}
          <div className="field">
            <label className="label">New Item</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          {/* New Item entry form submit button */}
          <div className="field">
            <div className="control">
              <button className="button">Add to list</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionalComponent;
