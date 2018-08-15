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
`;

class ChatController extends Component {
  constructor(props) {
    super(props);

    this.Dispatcher = new Dispatcher();
  }

  componentDidMount() {
    this.newMsgAudio = new Audio("/sounds/sound_of_da_police.mp3");

    this.props.socket.on("chat::message", data => {
      this.newMsgAudio.play();
      debugger;
      //open chat popUp
      this.props.openChat(data.message.sender.id);
      //inform chatPopUps about message
      //chat popUp should filter out messages whith belongs to him by conversation id
      this.Dispatcher.dispatch("message", data);
    });
  }

  render() {
    const { chatUsers } = this.props;

    return (
      <ContainerWrapper>
        <Container>
          {chatUsers.map(userId => (
            <Chat key={userId} userId={userId} dispatcher={this.Dispatcher} />
          ))}
        </Container>
      </ContainerWrapper>
    );
  }
}

/* function mapStateToProps(state) {
  const { chatUsers } = state.chat;

  return {
    chatUsers
  };
}
export default socketConnect(connect(mapStateToProps,)(ChatController)); */

function mapStateToProps(state, props) {
  return {
    chatUsers: state.chat.chatUsers
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
