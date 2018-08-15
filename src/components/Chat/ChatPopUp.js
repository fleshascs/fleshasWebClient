import React, { Component } from "react";
import styled from "styled-components";
import { Spinner, Avatar } from "../../components";
import axios from "axios";
import EmojiButton from "./EmojiButton";
import { chatActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "./Message";
import { Link } from "react-router-dom";
import MoreMessagesToScroll from "../Shoutbox/MoreMessagesToScroll";
import { chatService, userService } from "../../_services";
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
  padding: 4px 0px 4px 3px;
  border-bottom: 1px solid #e6e6e6;
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
  padding-left: 7px;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`;
const CloseButton = styled.i`
  border: none;
  padding: 0px;
  background: none;
  color: #655f5f;

  &:focus {
    outline: none;
  }
`;
const HeaderUsername = styled(Link)`
  color: #143252;
  text-decoration: none !important;
  &:hover {
    text-decoration: none !important;
  }
`;

const SubmitIcon = styled.i`
  color: ${props => props.theme.PRIMARY_COLOR};
  filter: brightness(150%);
  &:hover {
    filter: brightness(300%);
  }
`;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loading: true,
      loadingError: false,
      showScrollHelper: false,
      conversation: null,
      message: "",
      user: {
        name: "",
        avatar: ""
      }
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleChatClose = this.handleChatClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.messageForm = React.createRef();
    this.submitButton = React.createRef();
    this.scrollableBox = React.createRef();
    this.input = React.createRef();
  }

  componentDidMount() {
    this.getUserDetails(this.props.userId);
    this.getConversationHistory();
    this.input.focus();

    this.props.dispatcher.on("message", data => {
      //debugger;
      if (
        this.state.conversation &&
        this.state.conversation.id != data.message.conversation_id
      ) {
        return;
      }

      this.setState((prevState, props) => {
        return { messages: [...prevState.messages, data.message] };
      });
      console.log(data);
      //debugger;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //palyginimas bus false neigu bus pamegta zinute nors ir masyvai skirsis
    //taciau tai yra gerai, nes mes nenorim nuscrollint i apacia, kai gaunamas like
    const haveNewMessages = this.state.messages !== prevState.messages;
    if (haveNewMessages && !this.state.showScrollHelper) {
      this.scrollToBottom();
    }
  }

  render() {
    return (
      <ChatContainer>
        <PopUpContainer>
          <PopUpHeader>
            <div className="d-flex">
              <Avatar
                imgUrl={this.state.user.avatar}
                size="small"
                className="mr-1"
              />
              <HeaderUsername to={`/profile/${this.state.user.user_id}`}>
                {this.state.user.name}
              </HeaderUsername>

              <CloseButton
                className="material-icons ml-auto"
                onClick={this.handleChatClose}
              >
                close
              </CloseButton>
            </div>
            <div style={{ color: "#000" }}>
              conversation id:
              {this.state.conversation && this.state.conversation.id}
              <br />
              props.userId: {this.props.userId}
            </div>
          </PopUpHeader>

          <MessagesContainer
            onScroll={this.handleScroll}
            innerRef={this.scrollableBox}
          >
            <Messages
              messages={this.state.messages}
              loading={this.state.loading}
            />

            <div className="pt-3" />
          </MessagesContainer>

          <MoreMessagesToScroll
            show={this.state.showScrollHelper}
            onClick={() => this.scrollToBottom()}
          />

          <InputContainer>
            <form onSubmit={this.handleMessageSubmit} ref={this.messageForm}>
              <Input
                type="text"
                placeholder="Parašyk žinutę..."
                autoComplete="off"
                value={this.state.message}
                onChange={e => {
                  this.setState({ message: e.target.value });
                }}
                innerRef={el => {
                  this.input = el;
                }}
              />
              <input type="submit" ref={this.submitButton} className="d-none" />
            </form>
            <div style={{ display: "flex" }}>
              <div>
                <EmojiButton />
              </div>
              <div className="ml-auto">
                {this.state.message ? (
                  <SubmitIcon
                    className="material-icons mr-1 fadeMe"
                    onClick={() => this.submitButton.current.click()}
                  >
                    send
                  </SubmitIcon>
                ) : null}
              </div>
            </div>
          </InputContainer>
        </PopUpContainer>
      </ChatContainer>
    );
  }

  handleScroll(e) {
    const containerHeight = e.target.offsetHeight;
    const scrollableAreaHeight = e.target.scrollHeight;
    const scrolledHeight = e.target.scrollTop;

    const scrollHeight = scrollableAreaHeight - containerHeight;
    const scrolledPercent = (scrolledHeight / scrollHeight) * 100;

    let showScrollHelper = false;
    if (scrolledPercent < 90) {
      showScrollHelper = true;
    }

    this.setState({ showScrollHelper });
  }

  scrollToBottom() {
    const scrollableBox = this.scrollableBox.current;
    scrollableBox.scrollTo(0, scrollableBox.scrollHeight);
  }

  handleChatClose() {
    this.props.dispatch(chatActions.closeChat(this.props.userId));
  }

  handleMessageSubmit(e) {
    e.preventDefault();

    if (this.state.message.length < 1) return false;

    const data = {
      message: this.state.message,
      conversationId:
        (this.state.conversation && this.state.conversation.id) || null,
      to: this.props.userId || null
    };

    this.setState({ message: "" });

    chatService.sendMessage(data);
  }

  onEmojiSelect(e) {
    console.log(e);
  }

  getUserDetails(UserId) {
    userService.getById(UserId).then(response => {
      const user = response.success;
      this.setState({ user: user });

      //debugger;
    });

    /*  const URL = "http://fleshas.lt/infusions/shoutbox_panel/userData.php";

    axios
      .get(URL + "?userId=" + UserId)
      .then(response => {
        this.setState({
          user: response.data.usersData[0]
        });
      })
      .catch(error => {
        this.setState({
          loadingError: true
        });
      }); */
  }

  getConversationHistory() {
    const data = {
      conversationId: this.state.conversation && this.state.conversation.id,
      to: this.props.userId
    };
    chatService.GetConversationHistory(data).then(response => {
      let whatEver = {};
      if (response.messages) {
        whatEver = {
          messages: response.messages.data,
          conversation: response.conversation
        };
      }

      this.setState({
        ...whatEver,
        loading: false
      });
    });
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
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className="mx-2">
        {this.props.messages.map(message => (
          <Message message={message} key={message.id} />
        ))}
      </div>
    );
  }
}
