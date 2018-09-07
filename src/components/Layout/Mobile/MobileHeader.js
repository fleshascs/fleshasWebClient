import React, { Component } from "react";
import styled from "styled-components";
//import { NavBar } from "../components";

const Container = styled.header`
  color: #fff;
  background: ${props => props.theme.PRIMARY_COLOR};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  z-index: 1;
  left: -3px;
  right: -3px;
  top: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #efefef;
  transition: all 0.3s ease, top 0.2s ease-in-out;
`;

const Logo = styled.div`
  font-family: bauerg;
  font-size: 1.7em;
`;

const Top = styled.div`
  background: ${props => props.theme.HEADER_TOP_COLOR};
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Top>
          <div className="container d-flex">
            <Logo className="mx-auto">fleshas.lt</Logo>
          </div>
        </Top>
      </Container>
    );
  }
}

export default Header;
