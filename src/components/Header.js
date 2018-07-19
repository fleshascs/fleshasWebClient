import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  min-height: 112px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">proflis</Link>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Header;
