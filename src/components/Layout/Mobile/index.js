import React, { Component } from "react";
import styled from "styled-components";
import { Middle, Chat } from "../../../components";
import { ModalContainer } from "../../Modal";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  overflow: hidden;
`;

const MobileFooterMenu = styled.div`
  background: #071227;
  display: flex;
  justify-content: space-between;
`;

const MobileButton = styled.button`
  background: #1c2b48;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  border: 2px solid #021133;

  &:active {
    background: #27488a;
    outline: none;
    border: none;
  }
`;

const Icon = styled.i`
  z-index: 1;
  color: #b3b7bf;
`;

class Layout extends Component {
  render() {
    return (
      <Container>
        <MobileHeader />
        <ColumnsWrapper>
          <Middle>{this.props.children}</Middle>
        </ColumnsWrapper>
        <Footer>
          <MobileFooterMenu className="py-2 px-3">
            <MobileButton>
              <Icon className="material-icons">people_outline</Icon>
            </MobileButton>
            <Link to="/">
              <MobileButton>
                <Icon className="material-icons">reorder</Icon>
              </MobileButton>
            </Link>
            <Link to="/shoutbox">
              <MobileButton>
                <Icon className="material-icons">chat_bubble_outline</Icon>
              </MobileButton>
            </Link>
          </MobileFooterMenu>
          <Chat />
        </Footer>
        <ModalContainer />
      </Container>
    );
  }
}

export default Layout;

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
`;

class Footer extends Component {
  render() {
    return <FooterContainer>{this.props.children}</FooterContainer>;
  }
}
