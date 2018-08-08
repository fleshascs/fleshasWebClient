import React, { Component } from "react";
import styled from "styled-components";
import { Spinner } from "../components";

const Container = styled.div`
  position: absolute;
  border-radius: 3px;
  border: 1px solid #ececec;
  width: 300px;
  height: 500px;
  background-color: #fff;
  z-index: 2;
`;

class MessagesListPreview extends Component {
  render() {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
}

export default MessagesListPreview;
