import React from "react";
import styled from "styled-components";
import { Avatar } from "../../../components";
import { Link } from "react-router-dom";
import config from "../../../config";

const StyledLink = styled.div`
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

const Topic = props => {
  const { topic } = props;
  console.log("------------");
  console.log(topic);
  return (
    <StyledLink>
      <div>
        <Link to="/profile">
          <Avatar
            size="50"
            imgUrl="http://fleshas.lt/images/avatars/imgres[6168].jpg"
          />
        </Link>
      </div>
      <SubjectContainer>
        <Link to={`/thread/${topic.slug}`}>
          <ForumName>{topic.title}</ForumName>
        </Link>
        <div>prieš 3 dienas • {topic.user.username}</div>
      </SubjectContainer>
      <ViewsColumn>
        <ImportantBig>{topic.upvotes}</ImportantBig>
        <NotImportant>įvertinimas</NotImportant>
      </ViewsColumn>
      <AnswersColumn>
        <ImportantBig>{topic.postcount}</ImportantBig>
        <NotImportant>Atsakymai</NotImportant>
      </AnswersColumn>
      <ViewsColumn>
        <ImportantBig>{topic.viewcount}</ImportantBig>
        <NotImportant>Peržiūros</NotImportant>
      </ViewsColumn>
      <AuthorColumn
        style={{ borderLeft: `3px solid ${props.category.bgColor}` }}
      >
        <Link to="/profile" className="ml-3">
          <Avatar circle={true} imgUrl={config.ROOT_URL + topic.user.picture} />
        </Link>
        <div className="ml-2">
          <Link to="/profile">
            <Important>{topic.teaser.user.username}</Important>
          </Link>

          <NotImportant>prieš 3 dienas</NotImportant>
          <NotImportant>{topic.teaser.content}</NotImportant>
        </div>
      </AuthorColumn>
    </StyledLink>
  );
};

export default Topic;
