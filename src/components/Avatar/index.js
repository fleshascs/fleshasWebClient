import React from "react";
import styled from "styled-components";

const AvatarImg = styled.img`
  box-shadow: rgba(139, 139, 139, 0.32) 1px 1px 3px 0px;
  height: ${props => props.size};
  width: ${props => props.size};
  border-width: 0px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius: 5px;

  &:hover {
    box-shadow: ${props => props.theme.AVATAR_HOWER_SHADOW_COLOR} 0px 0px 4px
      4px;
  }
`;

const Avatar = props => (
  <AvatarImg
    size={getSize(props.size)}
    className={` ${props.className}`}
    src={props.imgUrl}
    onClick={props.onClick}
  />
);

export default Avatar;

function getSize(size) {
  switch (size) {
    case "small":
      return "25px";
    case "meddium":
      return "85px";
    case "big":
      return "200px";
    default:
      return "30px";
  }
}
