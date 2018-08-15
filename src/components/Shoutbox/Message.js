import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username } from "../../components";
import { shoutBoxService } from "../../_services";
import moment from "moment";
import "moment/locale/lt";

const MessageContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const MessageText = styled.div`
  flex: 1;
  font-size: 14px;
  color: #524e4e;
  margin-right: 3px;
`;

const MessgeLikeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  border: none;
  background: none;
  padding: none;

  &:focus {
    outline: none;
  }

  &:before {
    content: "";
    background: ${props => props.theme.PRIMARY_COLOR};
    display: block;
    position: absolute;
    padding-top: 60%;
    padding-left: 100%;
    margin-left: -10px !important;
    margin-top: 1px;
    opacity: 0;
    transition: all 0.8s;
    border-radius: 10px;
    z-index: -1;
  }

  &:active:before {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  &:not(.HasLikes) {
    display: none;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  ${MessageWrapper}:hover > ${MessgeLikeButton} {
    display: block;
  }
`;

const MessageDate = styled.div`
  font-size: 0.8em;
  flex: 1;
  text-align: right;
  padding-right: 2em;
  color: #afafaf;
`;

class Message extends Component {
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
    const { message } = this.props;

    return (
      <MessageContainer className="ml-2">
        <div>
          <Avatar imgUrl={`${message.user_avatar}`} />
        </div>
        <div className="ml-2 w-100">
          <div style={{ display: "flex" }}>
            <Username style={{ flex: 1 }} userId={message.user_id}>
              {message.username}
            </Username>
            <MessageDate className="ml-auto message-date">
              {moment(
                message.date || new Date(),
                "YYYY-MM-DD HHmmss"
              ).fromNow()}
            </MessageDate>
          </div>
          <MessageWrapper className="MessageWrapper">
            <MessageText>{message.message}</MessageText>
            <LikesButton
              likes={this.props.message.likes}
              id={message.message_id}
            />
          </MessageWrapper>
        </div>
      </MessageContainer>
    );
  }
}

const MaterialLikeIcon = styled.span`
  padding: 3px;
  font-size: 16px;
`;

const NumberOfLikes = styled.span`
  color: #848484;
`;

const LikesBackground = styled.span`
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 0 #dadde1;
  color: #8d949e;
  font-size: 11px;
  font-weight: normal;
  line-height: 11px;
  margin: 0 1px 0 -10px;
  padding: 2px 4px 2px 2px;
  cursor: pointer;
`;

/* 
.hiddeAndTakeSpace {
  visibility: hidden;
}
*/
class LikesButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    shoutBoxService.likeMessage(this.props.id);
  }

  render() {
    const likes = this.props.likes;

    return (
      <MessgeLikeButton
        className={`fadeMe MessgeLikeButton ${likes > 0 ? "HasLikes" : ""}`}
        onClick={this.handleClick}
      >
        <LikesBackground>
          <MaterialLikeIcon className="material-icons">😂</MaterialLikeIcon>
          <NumberOfLikes>{likes}</NumberOfLikes>
        </LikesBackground>
      </MessgeLikeButton>
    );
  }
}
export default Message;
