import React, { Component } from "react";

class InputUsername extends Component {
  render() {
    return (
      <>
        <div className="input">
          <input
            type="text"
            placeholder="el. paštas"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
          <span className="icon">
            <i className="material-icons">mail_outline</i>
          </span>
        </div>
        {submitted &&
          !username && <div className="help-block">Username is required</div>}
      </>
    );
  }
}

export default InputUsername;
