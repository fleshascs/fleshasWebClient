import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavBar, LoginRegisterBlock, UserBlock } from "../components";

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
  // min-height: 112px;
`;

const Logo = styled.div`
  font-family: bauerg;
  font-size: 2em;
`;

const Top = styled.div`
  background: ${props => props.theme.HEADER_TOP_COLOR};
`;

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <Container>
        <Top>
          <div className="col d-flex">
            <div className="container d-flex" style={{ marginRight: 0 }}>
              <Logo>fleshas.lt</Logo>
            </div>
            <div>{loggedIn ? <UserBlock /> : <LoginRegisterBlock />}</div>
          </div>
        </Top>
        <NavBar />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}
export default connect(mapStateToProps)(Header);
