import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { chatActions } from "../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import OnlinePlayers from "./ServerList/UserInfoPopUp";

/* const Important = styled.div` */
const Important = styled(Link)`
  font-size: ${props => props.size};
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: ${props => (props.bold == true ? "bold" : "normal")};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserInfo: false
    };
  }

  /* handleClick() {
    this.props.dispatch(chatActions.openChat(this.props.userId));
  } */

  showUserInfo() {
    //this.setState({ showUserInfo: true });
  }
  hideUserInfo() {
    this.setState({ showUserInfo: false });
  }

  render() {
    /* onClick={this.handleClick.bind(this)} */
    return (
      <Important
        onMouseEnter={this.showUserInfo.bind(this)}
        onMouseLeave={this.hideUserInfo.bind(this)}
        size={this.props.size}
        to={`/profile/${this.props.userId}`}
        className={`${this.props.className}`}
        bold={this.props.bold == false ? false : true}
        style={this.props.style}
      >
        {this.props.children}
        {this.state.showUserInfo ? <OnlinePlayers server={1} /> : null}
      </Important>
    );
  }
}

Username.propTypes = {
  children: PropTypes.string,
  userId: PropTypes.number
};

Username.defaultProps = {
  size: "13px"
};

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

export default connect(mapDispatchToProps)(Username);
