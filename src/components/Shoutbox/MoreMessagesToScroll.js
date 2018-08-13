import React, { Component } from "react";
import styled from "styled-components";

const InfoMoreMessages = styled.div`
  position: absolute;
  bottom: 16%;
  font-size: 0.8em;
  color: #faf9fa;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const MoreMessages = props => {
  if (props.show) {
    return (
      <InfoMoreMessages
        className="text-center py-3 mr-2 w-100"
        onClick={props.onClick}
      >
        Žemiau yra daugiau žinučių.
      </InfoMoreMessages>
    );
  }
  return null;
};

export default MoreMessages;
