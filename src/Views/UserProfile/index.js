import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username, Box, LatestPosts } from "../../components";
//import axios from "axios";
import { Link } from "react-router-dom";

const ProfileAvatar = styled(Avatar)`
  border-radius: 0px;
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: "http://fleshas.lt/images/avatars/giphy.gif"
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div class="row">
          <ProfileAvatar
            imgUrl={this.state.avatar}
            size="big"
            className="mr-1"
          />
          <div className="ml-5">
            <Username size="2em" userId={1}>
              fleshas.lt
            </Username>
            El. paštas: fleshas.lt <br /> Steam ID : STEAM_0:1:9204252<br />
            Skype : live:qwewqeaaa<br />
            Reputacija: +107
          </div>
        </div>

        <LatestPosts className="mt-5" />

        <div />
      </div>
    );
  }
}

export default UserProfile;
