import React, { Component } from "react";
import styled from "styled-components";
import { UserBlock, Shoutbox } from "../components";

const Container = styled.div`
  height: 100%;
  width: 22rem;
  border-left: 1px solid #ccc5c5;
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
    return (
      <Container>
        <Wrapper>
          <div className="p-2">
            <UserBlock />
          </div>
          <BreakLine />
          <Shoutbox />
        </Wrapper>
      </Container>
    );
  }
}

export default Right;
