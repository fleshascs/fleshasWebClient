import React from "react";
import styled from "styled-components";

const AvatarImg = styled.img`
  box-shadow: rgba(139, 139, 139, 0.32) 1px 1px 3px 0px;
  height: 40px;
  width: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius: 100%;

  &:hover {
    box-shadow: ${props => props.theme.AVATAR_HOWER_SHADOW_COLOR} 0px 0px 4px
      4px;
  }
`;

const Avatar = props => <AvatarImg src={props.imgUrl} />;

export default Avatar;
