import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username, Box, LatestPosts } from "../../components";
import { userService } from "../../_services";
//import axios from "axios";
//import { Link } from "react-router-dom";

import { chatActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ProfileAvatar = styled(Avatar)`
  border-radius: 0px;
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: 1,
      avatar: "",
      name: ""
    };
    this.handleChatButton = this.handleChatButton.bind(this);
  }

  handleChatButton() {
    //prihardkodintas id
    this.props.dispatch(chatActions.openChat(this.state.user_id));
  }

  componentWillMount() {
    //tureciau gaut user id...
    userService.getById(this.state.user_id).then(response => {
      const user = response.success;
      this.setState({ ...user });
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ProfileAvatar
            imgUrl={this.state.avatar}
            size="big"
            className="mr-1"
          />
          <div className="ml-5">
            <Username size="2em" userId={1}>
              {this.state.name}
            </Username>
            <br />
            El. paštas: fleshas.lt <br /> Steam ID : STEAM_0:1:9204252
            <br />
            Skype : live:qwewqeaaa
            <br />
            Reputacija: +107
            <br />
            <button className="btn btn-primary" onClick={this.handleChatButton}>
              Rašyti žinutę
            </button>
          </div>
        </div>

        <LatestPosts className="mt-5" />

        <div />
      </div>
    );
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

export default connect(mapDispatchToProps)(UserProfile);
