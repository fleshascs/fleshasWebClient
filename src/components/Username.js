import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { chatActions } from "../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Important = styled.div`
  font-size: 13px;
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
  cursor: pointer;
`;

class Username extends Component {
  handleClick() {
    this.props.dispatch(chatActions.openChat(this.props.userId));
  }

  render() {
    return (
      <Important onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </Important>
    );
  }
}

Username.propTypes = {
  children: PropTypes.string,
  userId: PropTypes.number
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
