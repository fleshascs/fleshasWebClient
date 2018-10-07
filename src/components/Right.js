import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { UserBlock, LoginRegisterBlock, Shoutbox } from "../components";

const Container = styled.div`
  height: 100%;
  width: 25%;
  max-width: 22rem;
  border-left: 1px solid #ccc5c5;
  background: #fff;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BreakLine = styled.div`
  border-top: 1px solid #ccc5c5;
`;

class Right extends Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <Container>
        <Wrapper>
          <BreakLine />
          {/*  <div className="p-2">
            {loggedIn ? <UserBlock /> : <LoginRegisterBlock />}
          </div> */}
          <BreakLine />
          <Shoutbox />
        </Wrapper>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
    loggedIn
  };
}
export default connect(mapStateToProps)(Right);
