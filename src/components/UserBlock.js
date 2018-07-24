import React, { Component } from "react";
import styled from "styled-components";
import { MessagesListPreview } from "../components";

const Container = styled.div`
  display: flex;
`;

const AvatarWrapper = styled.div`
  box-shadow: rgba(139, 139, 139, 0.32) 1px 1px 3px 0px;
  height: 40px;
  width: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius: 100%;
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-width: 0px;
`;

const EditButton = styled.span`
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 12px;
  color: #e2e2e2;
  width: 100%;
`;

const AvatarImg = styled.div`
  background-image: url("${props => props.imgPath}");
  width: 100%;
  height: 100%;
`;

const UserMenuWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Username = styled.div`
  font-size: 13px;
  color: rebeccapurple;
  font-weight: bold;
`;

const Usermenu = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
`;

class UserBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <a href="#">
          <AvatarWrapper>
            <AvatarImg imgPath="http://fleshas.lt/images/avatars/img_0846_20160710_191617_1_1.jpg" />
            <EditButton>Keisti</EditButton>
          </AvatarWrapper>
        </a>

        <UserMenuWrapper>
          <Username>fleshas.lt</Username>
          <Usermenu>
            <MessagesButton messagesCount={2} />
            <i className="material-icons text-muted mr-3">
              supervised_user_circle
            </i>
            <i className="material-icons text-muted">&#xE8AC;</i>
          </Usermenu>
        </UserMenuWrapper>
      </Container>
    );
  }
}

const MessagesButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  cursor: pointer;

  i.active {
    color: rgb(94, 43, 162);
  }
`;

const NumberOfMessages = styled.div`
  position: absolute;
  top: -2px;
  color: #fff;
  left: 8px;
  
}
`;
const MessagesListPreviewContainer = styled.div`
  position: relative;
  left: -125px;
  top: 27px;
}
`;

class MessagesButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlayers: false
    };

    this.showPanel = this.showPanel.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
  }

  showPanel() {
    this.setState({ showPlayers: true });
  }

  hidePanel() {
    this.setState({ showPlayers: false });
  }

  render() {
    const classList =
      "material-icons mr-3" + (this.props.messagesCount ? " active" : "");
    return (
      <MessagesButtonContainer
        onMouseEnter={this.showPanel}
        onMouseLeave={this.hidePanel}
      >
        <i className={classList}>chat_bubble</i>
        <NumberOfMessages>{this.props.messagesCount}</NumberOfMessages>
        {this.state.showPlayers ? (
          <MessagesListPreviewContainer>
            <MessagesListPreview />
          </MessagesListPreviewContainer>
        ) : null}
      </MessagesButtonContainer>
    );
  }
}

export default UserBlock;
