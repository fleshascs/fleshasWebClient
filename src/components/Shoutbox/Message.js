import React, { Component } from "react";
import styled from "styled-components";
import { Avatar } from "../../components";

const MessageContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
`;

const Important = styled.div`
  font-size: 13px;
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
`;
const MessageText = styled.div`
  font-size: 14px;
  color: #524e4e;
`;
const MessageWrapper = styled.div`
width: 100%;
 /*  &::hover > ${MessgeLikeButton} {
    visibility: visible !important;
  } */
`;

const MessgeLikeButton = styled.div`
  position: relative;
  width: 100%;
  text-align: right;

  /* visibility: hidden; */
`;

const NumberOfLikes = styled.span`
  color: #848484;
`;
const MaterialLikeIcon = styled.i`
  padding: 3px;
  font-size: 16px;
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

  //sitas nebus reikalingas
  getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //sitas irgi nebus reikalingas
  getRandomLikes() {
    const likes = this.getRandomInteger(-20, 10);
    return likes > 0 ? likes : 0;
  }

  render() {
    const likes = this.getRandomLikes();
    const NumberOfLikesClass = likes <= 0 ? "hiddeAndTakeSpace" : "";
    return (
      <MessageContainer className="ml-2">
        <Avatar
          imgUrl={`http://fleshas.lt/images/avatars/${this.props.avatar}`}
        />
        <div className="ml-2 w-100">
          <div style={{ display: "flex" }}>
            <Important style={{ flex: 1 }}>{this.props.name}</Important>
          </div>
          <MessageWrapper className="MessageWrapper">
            <MessageText
              dangerouslySetInnerHTML={{ __html: this.props.message }}
            />
            <MessgeLikeButton
              className={`MessgeLikeButton ${likes > 0 ? "HasLikes" : ""}`}
            >
              <LikesBackground>
                <MaterialLikeIcon className="material-icons">
                  😂
                </MaterialLikeIcon>
                <NumberOfLikes className={NumberOfLikesClass}>
                  {likes}
                </NumberOfLikes>
              </LikesBackground>
            </MessgeLikeButton>
          </MessageWrapper>
        </div>
      </MessageContainer>
    );
  }
}

export default Message;
