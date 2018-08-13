import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username } from "../../components";
import { shoutBoxService } from "../../_services";

const MessageContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const MessageText = styled.div`
  flex: 1;
  font-size: 14px;
  color: #524e4e;
`;
const MessageWrapper = styled.div`
  display: flex;
  width: 100%;
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
    return (
      <MessageContainer className="ml-2">
        <div>
          <Avatar imgUrl={`${this.props.avatar}`} />
        </div>
        <div className="ml-2 w-100">
          <div style={{ display: "flex" }}>
            <Username style={{ flex: 1 }} userId={this.props.userId}>
              {this.props.name}
            </Username>
          </div>
          <MessageWrapper className="MessageWrapper">
            <MessageText
              dangerouslySetInnerHTML={{ __html: this.props.message }}
            />
            <LikesButton likes={this.props.likes} id={this.props.id} />
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

const MessgeLikeButton = styled.button`
  position: relative;
  text-align: right;
  border: none;
  background: none;
  padding: none;

  &:focus {
    outline: none;
  }

  /* visibility: hidden; visibility: visible; */
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
    const NumberOfLikesClass = likes <= 0 ? "hiddeAndTakeSpace" : "";
    return (
      <MessgeLikeButton
        className={`MessgeLikeButton ${likes > 0 ? "HasLikes" : ""}`}
        onClick={this.handleClick}
      >
        <LikesBackground>
          <MaterialLikeIcon className="material-icons">😂</MaterialLikeIcon>
          <NumberOfLikes className={NumberOfLikesClass}>{likes}</NumberOfLikes>
        </LikesBackground>
      </MessgeLikeButton>
    );
  }
}
export default Message;
