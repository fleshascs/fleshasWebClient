import React, { Component } from "react";
import styled from "styled-components";
import { Header, Middle, Right, Chat, Left } from "../../../components";
import { ModalContainer } from "../../Modal";
import Bottom from "./Bottom";
import Background from "./Background";

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

class Layout extends Component {
  render() {
    return (
      <Container>
        <Background />
        <Left />
        <Header />
        <ColumnsWrapper>
          <Middle>
            <div style={{ minHeight: "100vh" }}>{this.props.children}</div>
            {/* 100vh tam kad bottom nesokinetu pagal contento kieki */}
            <Bottom />
          </Middle>
          <Right />
        </ColumnsWrapper>
        <Footer>
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
