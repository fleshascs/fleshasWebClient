import React, { Component } from "react";
import { Topic } from "../../components";
class Thread extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "10px" }}>
        <Topic />
      </div>
    );
  }
}

export default Thread;
