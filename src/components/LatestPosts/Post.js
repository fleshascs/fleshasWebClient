import React from "react";
import styled from "styled-components";
import { Avatar, Username } from "../../components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  padding-left: 0.25rem;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  padding-right: 0.5rem;
  color: #000;

  &:hover {
    color: ${props => props.theme.PRIMARY_COLOR} !important;
    text-decoration: none;
    background: #ececec;
  }
`;

const AuthorColumn = styled.div`
  display: flex;
  flex: 2;
`;
const ViewsColumn = styled.div`
  flex: 1;
  text-align: center;
`;

const AnswersColumn = ViewsColumn.extend``;

const Important = styled.div`
  font-size: 13px;
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
`;
const NotImportant = styled.div`
  font-size: 12px;
  color: #9c9c9c;
`;

const ThreadNameNCategoryContainer = styled.div`
  width: 100%;
  flex: 3;
`;
const ThreadName = styled.div`
  font-weight: 500;
  font-size: 15px;
  text-align: right;
`;
const ThreadCategory = styled.div`
  float: right;
  font-size: 12px;
  color: #9c9c9c;
`;

const ServerListItem = props => (
  <StyledLink to="/thread">
    <AuthorColumn>
      <Avatar imgUrl={props.user.avatar} />

      <div className="ml-2">
        <Username userId={1}>{props.user.username}</Username>

        <NotImportant>{props.postDate}</NotImportant>
      </div>
    </AuthorColumn>
    <ViewsColumn>
      <Important>{props.threadViews}</Important>
      <NotImportant>Peržiūros</NotImportant>
    </ViewsColumn>
    <AnswersColumn>
      <Important>{props.threadPosts}</Important>
      <NotImportant>Atsakymai</NotImportant>
    </AnswersColumn>
    <ThreadNameNCategoryContainer>
      <ThreadName>{props.threadTilte}</ThreadName>
      <ThreadCategory>{props.threadCategory}</ThreadCategory>
    </ThreadNameNCategoryContainer>
  </StyledLink>
);

export default ServerListItem;
