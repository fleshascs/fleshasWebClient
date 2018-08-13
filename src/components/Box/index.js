import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  position: relative;
  background: rgb(255, 255, 255);
`;

class BoxComponent extends Component {
  render() {
    return <Box className={this.props.className}>{this.props.children}</Box>;
  }
}

export default BoxComponent;
