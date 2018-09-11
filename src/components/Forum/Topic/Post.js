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

const Post = props => {
  const { post } = props;

  function createMarkup() {
    return { __html: post.content };
  }
  console.log(post);
  return (
    <div className="p-3 pb-0">
      <div className="pb-2">
        <Link to={`/profile/${post.user.uid}`}>
          <Avatar
            size="50"
            circle={true}
            imgUrl={config.ROOT_URL + post.user.picture}
          />
        </Link>
        {post.user.username}
      </div>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <hr />
    </div>
  );
};

export default Post;
