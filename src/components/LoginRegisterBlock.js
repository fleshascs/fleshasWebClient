import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import { userActions } from "../../_actions";
//import { MessagesListPreview } from "../components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledLoginButton = styled(Link)`
  padding: 9px;
  border-radius: 2px;
  color: #fff;
  background: ${props => props.theme.PRIMARY_COLOR};
  width: 100%;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

class LoginRegister extends Component {
  render() {
    return (
      <Container>
        <div className="text-center col">
          <StyledLoginButton to="/login">Prisijungti</StyledLoginButton>
        </div>
        <div className="text-center col">
          <StyledLoginButton to="/register">Registruotis</StyledLoginButton>
        </div>
      </Container>
    );
  }
}

export default LoginRegister;
