import React, { Component } from "react";
import styled from "styled-components";
import { Header, Middle, Right, Chat } from "../../components";

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

class Layout extends Component {
  render() {
    return (
      <Container>
        <Header />
        <ColumnsWrapper>
          <Middle>{this.props.children}</Middle>
          <Right />
        </ColumnsWrapper>
        <Footer>
          <Chat />
        </Footer>
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
