import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Spinner, Avatar } from "../../components";
//import ServerListItem from "./ServerListItem";

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
  }

  componentWillMount() {
    this.requestForMessages();
  }

  scrollToBottom() {
    console.log("==========messagesEnd===========");
    //console.log(this.messagesEnd);
    if (this.messagesEnd) {
      //{ behavior: "smooth" }
      this.messagesEnd.scrollIntoView({
        behavior: "instant",
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
            {this.state.messages.map((server, index) => (
              <ServerListItem
                name={server.username}
                avatar={server.avatar}
                message={server.msg}
                id={index + 1 < 10 ? "0" + (index + 1) : index + 1}
                map={server.map}
                onlinePlayers={server.online}
                maxOnlinePlayers={server.maxOnline}
              />
            ))}
          </MessgesList>
          <div
            ref={el => {
              this.messagesEnd = el;
              this.scrollToBottom();
              console.log("pamparam");
            }}
            className="pt-3"
          />
        </ShoutboxContainer>
        <div style={{ height: "100px", border: "1px solid red" }}>
          lalaalala
        </div>
      </Container>
    );
  }
}

export default ServerList;

//--------------------------server list item------------------------------------//
const ServerListItemContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  &:hover {
    background: #ececec;
  }
`;

const ServerMap = styled.div`
  font-size: 12px;
  color: #9c9c9c;
`;

const ServerNameContainer = styled.div`
  flex: 1;
`;

const SmallDataColumn = styled.div`
  text-align: center;
  font-size: 12px;
  color: #9c9c9c;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const ServerNameColumn = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const PlayerListContainer = styled.div`
  position: absolute;
  border-radius: 3px;
  border: 1px solid #ececec;
  width: 300px;
  height: 500px;
  background-color: #fff;
  z-index: 2;
`;

const MessageContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const Important = styled.div`
  font-size: 13px;
  color: rebeccapurple;
  font-weight: bold;
`;
const MessageText = styled.div`
  font-size: 14px;
  color: #524e4e;
`;

class ServerListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlayers: false
    };

    this.showPlayersPanel = this.showPlayersPanel.bind(this);
    this.hidePlayersPanel = this.hidePlayersPanel.bind(this);
  }

  showPlayersPanel() {
    this.setState({ showPlayers: true });
  }

  hidePlayersPanel() {
    this.setState({ showPlayers: false });
  }

  render() {
    return (
      <MessageContainer className="ml-2">
        <Avatar
          imgUrl={`http://fleshas.lt/images/avatars/${this.props.avatar}`}
        />
        <div className="ml-2">
          <div style={{ display: "flex" }}>
            <Important style={{ flex: 1 }}>{this.props.name}</Important>
          </div>
          <MessageText
            dangerouslySetInnerHTML={{ __html: this.props.message }}
          />
        </div>
      </MessageContainer>
    );
  }
}

const BoxContainer = styled.div`
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  position: relative;
  background: rgb(255, 255, 255);

  & > ${ServerListItemContainer} + ${ServerListItemContainer} {
    border-top: solid 1px rgba(0, 0, 0, 0.12);
  }
`;

class Box extends Component {
  render() {
    return <BoxContainer>{this.props.children}</BoxContainer>;
  }
}
