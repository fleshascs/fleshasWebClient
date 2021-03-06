import React from "react";
import styled from "styled-components";
import { Avatar } from "../../components";

const EditButton = styled.span`
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 12px;
  color: #e2e2e2;
  width: 100%;
  display: none;
`;

const AvatarWrapper = styled.div`
  box-shadow: rgba(139, 139, 139, 0.32) 1px 1px 3px 0px;

  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius: 100%;
  position: relative;
  height: ${props => props.size};
  width: ${props => props.size};
  overflow: hidden;
  border-width: 0px;

  &:hover ${EditButton} {
    display: block;
  }
`;

const AvatarImg = styled(Avatar)`
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

const AvatarUpload = props => (
  <AvatarWrapper
    ClassName={props.className}
    onClick={props.onClick}
    size={getSize(props.size)}
  >
    <AvatarImg imgUrl={props.src} size={props.size} />
    <EditButton>Keisti</EditButton>
  </AvatarWrapper>
);

export default AvatarUpload;

function getSize(size) {
  switch (size) {
    case "small":
      return "25px";
    case "meddium":
      return "85px";
    case "big":
      return "200px";
    case "60":
      return "60px";
    default:
      return "30px";
  }
}
