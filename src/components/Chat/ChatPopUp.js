import React, { Component } from "react";
import styled from "styled-components";
import { Spinner, Avatar } from "../../components";
import axios from "axios";
import EmojiButton from "./EmojiButton";
import { chatActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "./Message";
//https://www.npmjs.com/package/emoji-picker-react

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
const CloseButton = styled.button`
  border: none;
  padding: 0px;
  background: none;

  &:focus {
    outline: none;
  }
`;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loading: true,
      loadingError: false,
      user: {
        name: "",
        avatar: ""
      }
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleChatClose = this.handleChatClose.bind(this);
  }

  handleChatClose() {
    this.props.dispatch(chatActions.closeChat(this.props.userId));
  }

  handleMessageSubmit(e) {
    e.preventDefault();

    console.log("message submit");
  }

  onEmojiSelect(e) {
    console.log(e);
  }

  getUserDetails(UserId) {
    const URL = "http://fleshas.lt/infusions/shoutbox_panel/userData.php";

    axios
      .get(URL + "?userId=" + UserId)
      .then(response => {
        this.setState({
          user: response.data.usersData[0],
          messages: response.data.messages,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          loadingError: true
        });
      });
  }

  componentDidMount() {
    this.getUserDetails(this.props.userId);
  }

  render() {
    return (
      <ChatContainer>
        <PopUpContainer>
          <PopUpHeader>
            <Avatar
              imgUrl={this.state.user.avatar}
              size="small"
              className="mr-1"
            />
            {this.state.user.userName}
            <CloseButton className="float-right" onClick={this.handleChatClose}>
              <i className="material-icons">close</i>
            </CloseButton>
          </PopUpHeader>
          <MessagesContainer>
            {this.state.loading ? (
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
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        chatActions
      },
      dispatch
    )
  };
}

export default connect(mapDispatchToProps)(Chat);

class Messages extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => <Message message={message} />)}
      </div>
    );
  }
}
