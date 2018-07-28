import React, { Component } from "react";
import styled from "styled-components";
import Chat from "./ChatPopUp";

/* const Container = styled.div`
  align-items: flex-end;
  display: flex;
  float: left;
  position: relative;
  font-family: inherit;
`;

const PopUp = styled.div`
  height: auto;
  display: block;
  bottom: 0;
  display: none;
  height: 335px;
  position: absolute;
  width: 100%;
`;
*/

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: flex-end;
`;
const ContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  position: relative;
`;

class ChatController extends Component {
  render() {
    return (
      <ContainerWrapper>
        <Container>
          <Chat />
          <Chat />
        </Container>
      </ContainerWrapper>
    );
  }
}

export default ChatController;
