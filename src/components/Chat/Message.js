import React, { Component } from "react";
import styled from "styled-components";

const Important = styled.div`
  font-size: 13px;
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
`;

const MessageContainer = styled.div`
  display: flex;
  margin-top: 10px;
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
    const myUserId = 1;

    if (myUserId == this.props.message.UserId) {
      return (
        <MessageContainer style={{ justifyContent: "flex-end" }}>
          <MyMessageText>{this.props.message.message}</MyMessageText>
        </MessageContainer>
      );
    }

    return (
      <MessageContainer>
        <Important>{this.props.message.Name}</Important>
        <MessageText>{this.props.message.message}</MessageText>
      </MessageContainer>
    );
  }
}

export default Message;
