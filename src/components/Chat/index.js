import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Chat from "./ChatPopUp";

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
    const { chatUsers } = this.props;

    return (
      <ContainerWrapper>
        <Container>
          {chatUsers.map(userId => (
            <Chat key={userId} userId={userId} />
          ))}
        </Container>
      </ContainerWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { chatUsers } = state.chat;

  return {
    chatUsers
  };
}

export default connect(mapStateToProps)(ChatController);
