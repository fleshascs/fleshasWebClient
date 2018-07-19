import React, { Component } from "react";
import styled from "styled-components";
import { UserBlock } from "../components";
//import "./Right.css";

const Container = styled.div`
  height: 100%;
  width: 22rem;
  border-left: 1px solid #ccc5c5;
`;

class Right extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {/* <UserBlock /> */}
        desines blokas
      </Container>
    );
  }
}

export default Right;
