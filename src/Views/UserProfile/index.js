import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, Username, Box, LatestPosts } from "../../components";
import { userService } from "../../_services";
import { withRouter } from "react-router-dom";
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
      id: this.props.match.params.number, //bbz kas cia gavos
      avatar: "",
      name: ""
    };
    this.handleChatButton = this.handleChatButton.bind(this);
  }

  //getUserDetails updatins userio info pagal userid
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.getUserDetails(nextProps.match.params.number);
    }
  }

  componentWillMount() {
    this.getUserDetails(this.state.id);
  }

  render() {
    return (
      <div className="container mt-5">
        <div
          className="row mx-1"
          style={{
            background: "rgba(16, 8, 8, 0.1)",
            padding: "7px"
          }}
        >
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
            El. paštas: {this.state.email} <br /> Steam ID : STEAM_0:1:9204252
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

  handleChatButton() {
    this.props.dispatch(chatActions.openChat(this.state.id));
  }

  getUserDetails(userId) {
    userService.getById(userId).then(response => {
      const user = response.success;
      this.setState({ ...user });
    });
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

export default withRouter(connect(mapDispatchToProps)(UserProfile));
