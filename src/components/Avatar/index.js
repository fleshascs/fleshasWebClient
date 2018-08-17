import React from "react";
import styled from "styled-components";
//import ContentLoader from "react-content-loader";

const AvatarImg = styled.img`
  box-shadow: rgba(139, 139, 139, 0.32) 1px 1px 3px 0px;
  height: ${props => props.size};
  width: ${props => props.size};
  border-width: 0px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  border-radius:${props => (props.circle ? "50%" : "5px")};

  /* &:hover {
    box-shadow: ${props => props.theme.AVATAR_HOWER_SHADOW_COLOR} 0px 0px 4px
      4px;
  } */
`;

const PlaceHolder = styled.div`
  background: #dbdcde;
  height: ${props => props.size};
  width: ${props => props.size};
`;

const Avatar = props => {
  if (!props.imgUrl) {
    return (
      <PlaceHolder
        size={getSize(props.size)}
        className={` ${props.className}`}
        circle={props.circle}
      />
    );
  }

  return (
    <AvatarImg
      size={getSize(props.size)}
      className={` ${props.className}`}
      src={props.imgUrl}
      onClick={props.onClick}
      circle={props.circle}
    />
  );
};

export default Avatar;

function getSize(size = "30") {
  switch (size) {
    case "small":
      return "25px";
    case "meddium":
      return "85px";
    case "big":
      return "200px";
    case "60":
      return "60px";
    case "30":
      return "30px";
    default:
      return size + "px";
  }
}

/*
https://github.com/danilowoz/react-content-loader
http://danilowoz.com/create-content-loader/
const AvatarPlaceHolder = () => (
  <ContentLoader
    height={80}
    speed={1}
    primaryColor={"#000"}
    secondaryColor={"#efefef"}
  >
    <circle cx="30" cy="30" r="30" /> 
  </ContentLoader>
); */
