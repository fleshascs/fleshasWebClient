import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;

  @media (max-width: 1614px) and (min-width: 500px) {
    padding-left: 60px;
  }

  //padding-bottom: 50px;

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
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Middle;
