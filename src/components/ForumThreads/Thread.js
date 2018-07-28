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

const ImportantBig = styled.div`
  font-weight: 100;
  font-size: 22px;
  color: ${props => props.theme.PRIMARY_COLOR};
`;
const ForumName = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const SubjectContainer = styled.div`
  flex-basis: 40%;
  margin-left: 30px;
`;

const Thread = props => (
  <StyledLink to="/thread">
    <SubjectContainer>
      <ForumName>{props.name}</ForumName>
      <Important>Autorius {props.author.username}</Important>
    </SubjectContainer>
    <ViewsColumn>
      <ImportantBig>{props.views}</ImportantBig>
      <NotImportant>Peržiūros</NotImportant>
    </ViewsColumn>
    <AnswersColumn>
      <ImportantBig>{props.posts}</ImportantBig>
      <NotImportant>Atsakymai</NotImportant>
    </AnswersColumn>
    <AuthorColumn>
      <div style={{ flex: 1 }} />
      <Link to="/profile">
        <Avatar imgUrl={props.user.avatar} />
      </Link>
      <div className="ml-2">
        <Link to="/profile">
          <Important>{props.user.username}</Important>
        </Link>
        <NotImportant>{props.postDate}</NotImportant>
      </div>
    </AuthorColumn>
  </StyledLink>
);

export default Thread;
