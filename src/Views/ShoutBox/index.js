import React, { Component } from "react";
import { Shoutbox } from "../../components";
class ShoutBoxRoute extends Component {
  render() {
    return (
      <div className="d-flex h-100">
        <Shoutbox />
      </div>
    );
  }
}

export default ShoutBoxRoute;
