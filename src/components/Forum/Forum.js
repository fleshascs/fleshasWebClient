import React from "react";
import styled from "styled-components";
import { Avatar } from "../../components";
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

const LastPost = styled.div`
  display: flex;
  align-items: flex-right;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
`;
const ViewsColumn = styled.div`
  flex-basis: 15%;
  text-align: center;
`;

const AnswersColumn = ViewsColumn.extend``;

const Important = styled.div`
  font-size: 13px;
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: bold;
`;
const ImportantBig = styled.div`
  font-weight: 100;
  font-size: 22px;
  color: ${props => props.theme.PRIMARY_COLOR};
`;
const NotImportant = styled.div`
  font-size: 12px;
  color: #9c9c9c;
`;

const ForumName = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-left: 30px;
  flex-basis: 40%;
`;

const Forum = props => (
  <StyledLink to={`/forum/${props.forumId}`}>
    <ForumName>{props.name}</ForumName>

    <ViewsColumn>
      <ImportantBig>{props.posts}</ImportantBig>
      <NotImportant>Pranešimai</NotImportant>
    </ViewsColumn>
    <AnswersColumn>
      <ImportantBig>{props.threads}</ImportantBig>
      <NotImportant>Temos</NotImportant>
    </AnswersColumn>

    <LastPost>
      <div style={{ flex: 1 }} />
      <div class="mr-2">
        <Link to="/profile">
          <Important>{props.lastPostAuthorName}</Important>
        </Link>
        <NotImportant className="float-right">{props.postDate}</NotImportant>
      </div>
      <Link to="/profile">
        <Avatar imgUrl={props.lastPostAuthorAvatar} />
      </Link>
    </LastPost>
  </StyledLink>
);

export default Forum;
