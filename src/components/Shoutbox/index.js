import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { EmojiButton } from "../../components";
import Message from "./Message";
import "./taiKasNepavykoSuStyledComponents.css";

//https://bootsnipp.com/snippets/exR5v
//https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a
//https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
//https://stackoverflow.com/questions/25974527/scroll-element-into-view-at-bottom-of-page

const ShoutboxContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding-top: 10px;
  padding-right: 10px;
`;
const MessgesList = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column
  flex: 1;
`;

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messagesLoading: true,
      loadingError: false
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
  }

  onEmojiSelect(e) {
    console.log(e);
  }

  componentWillMount() {
    this.requestForMessages();
  }

  scrollToBottom() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({
        behavior: "instant", //{ behavior: "smooth" }
        block: "end",
        inline: "nearest"
      });
    }
  }

  requestForMessages() {
    axios
      .get(
        "http://fleshas.lt/infusions/shoutbox_panel/json_get_top10_msg.php?messagesToShow=20"
      )
      .then(response => {
        if (response.data.messages) {
          this.setState({
            messages: response.data.messages,
            messagesLoading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          messagesLoading: false,
          loadingError: true
        });
      });
  }

  render() {
    //jeigu klaida
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.messagesLoading) {
      return <div>kraunasi...</div>;
    }

    return (
      <Container>
        <ShoutboxContainer className="mt-2">
          <MessgesList>
            {this.state.messages.map((msg, index) => (
              <Message
                userId={msg.userId}
                name={msg.username}
                avatar={msg.avatar}
                message={msg.msg}
                key={msg.msg}
              />
            ))}
          </MessgesList>
          <div
            ref={el => {
              this.messagesEnd = el;
              this.scrollToBottom();
            }}
            className="pt-3"
          />
        </ShoutboxContainer>
        <div className="mx-3 py-3">
          <textarea className="w-100 textarea" />
          <EmojiButton onEmojiClick={this.onEmojiSelect} />
        </div>
      </Container>
    );
  }
}

export default ServerList;
