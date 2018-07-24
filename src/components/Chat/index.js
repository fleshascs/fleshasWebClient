import React, { Component } from "react";
import styled from "styled-components";
//import { Header, Middle, Right, Chat } from "../../components";

/* const Container = styled.div`
  align-items: flex-end;
  display: flex;
  float: left;
  position: relative;
  font-family: inherit;
`;

class ChatController extends Component {
  render() {
    return (
      <Container>
        <Chat />
      </Container>
    );
  }
}

export default ChatController;

const ChatContainer = styled.div`
  margin: 0 0 0 4px;
  position: relative;
`;

const PopUpContainer = styled.div`
  width: 284px;
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

class Chat extends Component {
  render() {
    return (
      <ChatContainer>
        <PopUpContainer>
          <PopUp>asdasd</PopUp>
        </PopUpContainer>
      </ChatContainer>
    );
  }
} */

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;

  align-items: flex-end;
`;

class ChatController extends Component {
  render() {
    return (
      <Container>
        <Chat />
        <Chat />
      </Container>
    );
  }
}

export default ChatController;

const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;

  align-items: flex-end;
  display: flex;
`;

const PopUpContainer = styled.div`
  border: 1px solid red;
  height: 200px;
  width: 300px;
  z-index: 2;
  background: #fff;
`;

class Chat extends Component {
  render() {
    return (
      <ChatContainer>
        <PopUpContainer>asdasd</PopUpContainer>
      </ChatContainer>
    );
  }
}
