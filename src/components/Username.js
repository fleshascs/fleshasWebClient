import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { chatActions } from "../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import OnlinePlayers from "./ServerList/UserInfoPopUp";

const Important = styled.div`
  font-size: ${props => props.size};
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
  cursor: pointer;
  position: relative;
`;

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserInfo: false
    };
  }

  handleClick() {
    this.props.dispatch(chatActions.openChat(this.props.userId));
  }

  showUserInfo() {
    //this.setState({ showUserInfo: true });
  }
  hideUserInfo() {
    this.setState({ showUserInfo: false });
  }

  render() {
    return (
      <Important
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.showUserInfo.bind(this)}
        onMouseLeave={this.hideUserInfo.bind(this)}
        size={this.props.size}
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
