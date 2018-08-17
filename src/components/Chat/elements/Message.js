import React, { Component } from "react";
import styled from "styled-components";
import { Avatar } from "../../../components";
import { connect } from "react-redux";
import "./message.css";

const Important = styled.div`
  font-size: 13px;
  color: #928686;
  margin-left: 2.2rem;
`;

const MessageContainer = styled.div`
  display: flex;
`;
const MessageText = styled.div`
  color: #000;
  background: rgb(239, 239, 239);
  margin-left: 5px;
  border-radius: 10px;
  padding: 5px 8px 6px;
  font-size: 13px;
`;

const MyMessageText = MessageText.extend`
  background: ${props => props.theme.CHAT_MY_MESSAGE_COLOR};
  color: #fff;
`;

class Message extends Component {
  render() {
    const { user, message, previousSenderSame, secondSenderSame } = this.props;
    let css = "";

    if (previousSenderSame) {
      css += " previousMsgFromSameSender";
    }
    if (secondSenderSame) {
      css += " secondMsgFromSameSender";
    }

    //tavo zinute
    if (user.id == message.sender.id) {
      return (
        <MessageContainer
          className={`${css} right`}
          style={{ justifyContent: "flex-end" }}
        >
          <MyMessageText className={`${css} right`}>
            {message.body}
          </MyMessageText>
        </MessageContainer>
      );
    }

    //oponento zinute
    return (
      <div className={`${css} left`}>
        <Important className="chat-oponent-name mt-3">
          {message.sender.name}
        </Important>
        <MessageContainer className={`${css} left`}>
          <div className="chat-oponent-details text-center">
            <Avatar className="m-auto" imgUrl={message.sender.avatar} />
          </div>
          <MessageText className={`${css} left`}>{message.body}</MessageText>
        </MessageContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return {
    user
  };
}
export default connect(mapStateToProps)(Message);
