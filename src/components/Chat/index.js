import React, { Component } from "react";
import styled from "styled-components";
import Chat from "./ChatPopUp";
import { socketConnect } from "socket.io-react";
import { chatActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Dispatcher from "../../plugins/Dispatcher";

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

  @media (max-width: 1370px) {
    width: 74%;
  }
`;

class ChatController extends Component {
  constructor(props) {
    super(props);

    this.Dispatcher = new Dispatcher();
  }

  componentDidMount() {
    this.newMsgAudio = new Audio("/sounds/steam_message_sound.mp3");

    this.props.socket.on("chat::message", data => {
      //debugger;
      if (data.message.sender.id !== this.props.user.id) {
        this.newMsgAudio.play();
        this.props.openChat(data.message);
      }
      //inform chatPopUps about message
      //chat popUp should filter out messages which belongs to him by conversation id
      this.Dispatcher.dispatch("message", data);
    });
  }

  render() {
    const { chatsOpened } = this.props;

    return (
      <ContainerWrapper>
        <Container>
          {chatsOpened.map(chat => (
            <Chat
              key={JSON.stringify(chat)}
              chat={chat}
              dispatcher={this.Dispatcher}
            />
          ))}
        </Container>
      </ContainerWrapper>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    chatsOpened: state.chat.chatsOpened,
    user: state.authentication.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(chatActions, dispatch);
}

export default socketConnect(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatController)
);
