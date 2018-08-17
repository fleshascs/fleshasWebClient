import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Login } from "./";

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

const LoginButton = styled.button`
  padding: 9px;
  border-radius: 2px;
  color: #fff;
  background: ${props => props.theme.PRIMARY_COLOR};
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const EditWindowBox = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const Box = styled.div`
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  position: relative;
  background: rgb(255, 255, 255);
  justify-content: space-between;
`;

class LoginRegister extends Component {
  state = {
    loginModalOpenend: false
  };
  render() {
    return (
      <Container>
        <Column className="text-center d-flex">
          {/* <StyledButton to="/login">Prisijungti</StyledButton> */}
          <LoginButton
            onClick={() => {
              this.setState({ loginModalOpenend: true });
            }}
          >
            Prisijungti
          </LoginButton>
          {this.state.loginModalOpenend ? (
            <Modal>
              <EditWindowBox>
                <Box>
                  <Login />
                </Box>
              </EditWindowBox>
            </Modal>
          ) : null}
        </Column>
        <Column className="text-center d-flex">
          <StyledButton to="/register">Registruotis</StyledButton>
        </Column>
      </Container>
    );
  }
}

export default LoginRegister;
