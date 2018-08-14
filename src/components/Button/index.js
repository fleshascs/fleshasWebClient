import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  border-color: ${props => props.theme.PRIMARY_COLOR};
`;

class ButtonComponent extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        color={this.props.color}
        className={this.props.className}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default ButtonComponent;
