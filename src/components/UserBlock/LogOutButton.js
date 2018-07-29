import React, { Component } from "react";
import styled from "styled-components";
import { userActions } from "../../_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Button = styled.button`
  padding: 0px;
  margin: 0px;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

class LogOutButton extends Component {
  handleClick() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    return (
      <Button onClick={this.handleClick.bind(this)}>
        <i className="material-icons text-muted">&#xE8AC;</i>
      </Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        userActions
      },
      dispatch
    )
  };
}

export default connect(mapDispatchToProps)(LogOutButton);

/*
this.props.dispatch(userActions.logout());
export default connect(mapDispatchToProps)(LogOutButton);
*/
