import React, { Component } from "react";
import styled from "styled-components";
import { NavBar } from "../components";

const Container = styled.header`
  color: #fff;
  background: ${props => props.theme.PRIMARY_COLOR};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  z-index: 7777;
  left: -3px;
  right: -3px;
  top: 0;
  padding: 0 3px 0 3px;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #efefef;
  transition: all 0.3s ease, top 0.2s ease-in-out;
  // min-height: 112px;
`;

const Logo = styled.div`
  font-family: bauerg;
  font-size: 2em;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <div className="container">
          <Logo>fleshas.lt</Logo>
        </div>
        <NavBar />
      </Container>
    );
  }
}

export default Header;
