import React, { Component } from "react";
import styled from "styled-components";
import LogOutButton from "./LogOutButton";
import MessagesButton from "./MessagesButton";
import { Link } from "react-router-dom";

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
  color: ${props => props.theme.PRIMARY_COLOR};
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
            <Link to="/settings">
              <i className="material-icons text-muted mr-3">
                supervised_user_circle
              </i>
            </Link>
            <LogOutButton />
          </Usermenu>
        </UserMenuWrapper>
      </Container>
    );
  }
}

export default UserBlock;
