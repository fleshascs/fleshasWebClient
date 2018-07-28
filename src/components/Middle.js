import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
  background-image: linear-gradient(
    -226deg,
    rgb(245, 248, 251) 0%,
    rgb(243, 246, 249) 100%
  );
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff2b;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.PRIMARY_COLOR};
  }
`;

class Middle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Middle;
