import React, { Component } from "react";
import styled from "styled-components";
import EmojiButton from "./EmojiButton";
import { chatActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ChatAvatar from "./elements/ChatAvatar";
import ChatInput from "./elements/ChatInput";
import MessagesList from "./elements/MessagesList";
import UsernamesList from "./elements/UsernamesList";
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

const CloseButton = styled.i`
  border: none;
  padding: 0px;
  background: none;
  color: #655f5f;

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
      showScrollHelper: false,
      chat: this.props.chat,
      users: [] //this conversation users list
    };

    this.handleChatClose = this.handleChatClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.scrollableBox = React.createRef();
  }

  componentDidMount() {
    this.getConversationHistory();

    this.props.dispatcher.on("message", data => {
      let messageDirectedToThisChat = false;
      const { chat } = this.state;
      const { message } = data;

      //debugger;
      if (chat.group_chat != message.group_chat) {
        return;
      }

      if (chat.conversation_id == message.conversation_id) {
        messageDirectedToThisChat = true;
      }

      if (
        !parseInt(chat.group_chat) &&
        [parseInt(message.to), parseInt(message.sender.id)].includes(
          chat.oponent_id
        )
      ) {
        messageDirectedToThisChat = true;
      }

      if (!messageDirectedToThisChat) {
        return;
      }

      this.setState((prevState, props) => {
        return { messages: [...prevState.messages, data.message] };
      });
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
    let users = this.state.users.slice();
    if (users.length > 1) {
      //debugger;
      const index = users.findIndex(u => u.id == 1);
      if (index >= 0) {
        users.splice(index, 1);
      }
    }

    return (
      <ChatContainer>
        <PopUpContainer>
          <PopUpHeader>
            <div className="d-flex">
              <ChatAvatar users={users} />
              <UsernamesList users={users} />
              <CloseButton
                className="material-icons ml-auto"
                onClick={this.handleChatClose}
              >
                close
              </CloseButton>
            </div>
          </PopUpHeader>

          <MessagesContainer
            onScroll={this.handleScroll}
            innerRef={this.scrollableBox}
          >
            <MessagesList
              messages={this.state.messages}
              loading={this.state.loading}
            />

            <div className="pt-3" />
          </MessagesContainer>

          <MoreMessagesToScroll
            show={this.state.showScrollHelper}
            onClick={() => this.scrollToBottom()}
          />
          <ChatInput onSubmit={this.onSubmit} />
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
    this.props.dispatch(chatActions.closeChat(this.state.chat));
  }

  onSubmit(message) {
    const data = {
      message,
      conversationId: this.state.chat.conversation_id,
      to: this.state.chat.oponent_id,
      group_chat: this.state.chat.group_chat
    };
    chatService.sendMessage(data);
  }

  getUserDetails(UserId) {
    userService.getById(UserId).then(response => {
      const user = response.success;
      this.setState({ users: [user] });
    });
  }

  getConversationHistory() {
    chatService.GetConversationHistory(this.state.chat).then(response => {
      let conversation = {};
      //is istorijos negausim conversation id jeigu nebuvo issiuta ne viena zinute
      if (response.conversation) {
        conversation = { conversation_id: response.conversation.id };
      }

      //jeigu nera istorijos vadinas reikes patiem issilupt su kuo susirasinejam
      if (!response.users && this.state.chat.oponent_id) {
        this.getUserDetails(this.state.chat.oponent_id);
      }

      this.setState({
        chat: { ...this.state.chat, ...conversation },
        messages: (response.messages && response.messages.data) || [],
        users: response.users || [],
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
