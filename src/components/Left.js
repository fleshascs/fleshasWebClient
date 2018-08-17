import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username } from "./";

const LeftBar = styled.div`
  background: #06183c;
  height: 100%;
  width: 70px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: center;

  &.opened {
    width: 400px;
  }
`;
const OnlineUsers = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
`;

const CollapseButtonIcon = styled.i`
  color: #1e4aa7;
`;
const SearchInput = styled.input`
  background: #0f1d3a;
  border: none;
  color: rgb(98, 127, 156);

  &:focus {
    border: none;
    outline: none;
  }
`;

const CollapseButton = styled.div`
  cursor: pointer;
  &:hover {
    background: #27488a;
  }
  &:hover ${CollapseButtonIcon} {
    color: #06183c;
  }
`;

const fakeUsers = [
  {
    avatar: "http://fleshas.lt/images/avatars/img_0846_20160710_191617_1_1.jpg",
    name: "fleshas.lt"
  },
  {
    avatar: "http://fleshas.lt/images/avatars/chaga8j.gif",
    name: "Sirmuzas"
  },
  {
    avatar:
      "https://www.gravatar.com/avatar/95be6b281ffed65cae74edcb9853056b.jpg?s=100&d=retro&r=g",
    name: "fleshas.lt"
  },
  {
    avatar:
      "https://www.gravatar.com/avatar/bbc735337ef4fc984af86acf856dc8ab.jpg?s=100&d=retro&r=g",
    name: "Legolas"
  }
];

class Left extends Component {
  state = {
    opened: false
  };
  render() {
    const { opened } = this.state;
    return (
      <LeftBar className={`${opened ? "opened" : ""}`}>
        <OnlineUsers>
          {fakeUsers.map(user => (
            <OnlineUser user={user} leftBarOpened={opened} />
          ))}
        </OnlineUsers>
        <div>
          <hr className="my-0" style={{ background: "#1e4aa7" }} />
        </div>
        {opened ? (
          <SearchInput
            placeholder="Paieška, įveskite nario vardą..."
            className="py-3 px-2"
          />
        ) : (
          <CollapseButton onClick={this.handleCollapse.bind(this)}>
            <CollapseButtonIcon className="material-icons mb-3 mt-3">
              search
            </CollapseButtonIcon>
          </CollapseButton>
        )}
        <div>
          <hr className="my-0" style={{ background: "#1e4aa7" }} />
        </div>
        <CollapseButton onClick={this.handleCollapse.bind(this)}>
          <CollapseButtonIcon className="material-icons mb-3 mt-3">
            {opened ? "keyboard_arrow_left" : "keyboard_arrow_right"}
          </CollapseButtonIcon>
        </CollapseButton>
      </LeftBar>
    );
  }

  handleCollapse() {
    this.setState({ opened: !this.state.opened });
  }
}

export default Left;

const UserContainer = styled.div`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
`;

const OnlineUser = props => {
  const opened = props.leftBarOpened;
  return (
    <UserContainer className={`w-100 mt-3 ${opened ? "text-left ml-3" : ""}`}>
      <Avatar
        imgUrl={props.user.avatar}
        className={`${opened ? "" : "mx-auto"} `}
        size="40"
        circle={true}
      />
      {opened ? (
        <Username
          userId={1}
          bold={false}
          className="ml-3"
          style={{ fontSize: "1.1em", color: "rgb(98, 127, 156)" }}
        >
          {props.user.name}
        </Username>
      ) : null}
    </UserContainer>
  );
};
