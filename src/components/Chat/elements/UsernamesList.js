import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderUsername = styled(Link)`
  color: #143252;
  text-decoration: none !important;
  &:hover {
    text-decoration: none !important;
  }
`;

function Usernames(props) {
  return (
    <span>
      {props.users.map((user, index) => (
        <HeaderUsername to={`/profile/${user.id}`} key={user.id}>
          {user.name}
          {props.users[index + 1] ? "," : null}
        </HeaderUsername>
      ))}
    </span>
  );
}
export default Usernames;
