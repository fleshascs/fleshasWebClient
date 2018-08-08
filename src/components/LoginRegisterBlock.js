import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import { userActions } from "../../_actions";
//import { MessagesListPreview } from "../components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledButton = styled(Link)`
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
        <Column className="text-center d-flex">
          <StyledButton to="/login">Prisijungti</StyledButton>
        </Column>
        <Column className="text-center d-flex">
          <StyledButton to="/register">Registruotis</StyledButton>
        </Column>
      </Container>
    );
  }
}

export default LoginRegister;
