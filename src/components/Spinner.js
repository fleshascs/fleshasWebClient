import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Spinner = styled.span`
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 39%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-bottom: -30px;
    border-radius: 50%;
    border: 3px solid lightgray;
    border-top-color: ${props => props.theme.PRIMARY_COLOR};
    animation: spinner 0.7s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default () => <Spinner />;
