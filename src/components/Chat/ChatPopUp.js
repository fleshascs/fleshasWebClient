import React, { Component } from "react";
import styled from "styled-components";
import { Spinner } from "../../components";
import axios from "axios";
//https://www.npmjs.com/package/emoji-picker-react
import EmojiButton from "./EmojiButton";

const ChatContainer = styled.div`
  margin-left: 10px;
  display: flex;
  height: 100%;
  width: 300px;
  position: relative;
  align-items: flex-end;
  display: flex;
`;

const PopUpContainer = styled.div`
  width: 100%;
  height: 350px;
  z-index: 2;
  background: #fff;
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  background: rgb(255, 255, 255);
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e3e4;
`;

const PopUpHeader = styled.div`
  background: ${props => props.theme.CHAT_HEADER_COLOR};
  color: #e9f0ff;
  padding: 5px 3px 5px 3px;
`;

const MessagesContainer = styled.div`
  overflow-y: scroll;
  flex: 1;
`;
const InputContainer = styled.div`
  border-top: 1px solid #ccc5c5;
`;

const Input = styled.input`
  border-radius: 0px;
  border: none;
  padding-left: 3px;
  width: 100%;
  &:focus {
    border: none;
  }
`;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loading: true,
      loadingError: false
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  handleMessageSubmit(e) {
    e.preventDefault();

    console.log("message submit");
  }

  onEmojiSelect(e) {
    console.log(e);
  }
  render() {
    return (
      <ChatContainer>
        <PopUpContainer>
          <PopUpHeader>
            testas testaitis
            <i className="material-icons float-right">close</i>
          </PopUpHeader>
          <MessagesContainer>
            {this.props.loading ? (
              <Spinner />
            ) : (
              <Messages messages={this.state.messages} />
            )}
          </MessagesContainer>

          <InputContainer>
            <form onSubmit={this.handleMessageSubmit}>
              <Input
                type="text"
                placeholder="Parašyk žinutę..."
                autoComplete="off"
                name="message"
              />
            </form>
            <div style={{ display: "flex" }}>
              <EmojiButton />
            </div>
          </InputContainer>
        </PopUpContainer>
      </ChatContainer>
    );
  }

  requestForChatMessages() {
    const URL = "http://fleshas.lt/php/api/chat/messages/";
    axios
      .get(URL)
      .then(response => {
        if (response.data.messages) {
          this.setState({
            messages: response.data.messages,
            loading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          loading: false,
          loadingError: true
        });
      });
  }
}

export default Chat;

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.messages.map(message => <div>zinute</div>)}</div>;
  }
}
