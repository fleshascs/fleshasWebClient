import React from "react";
import styled from "styled-components";
import { Avatar } from "../../../components";
import { Link } from "react-router-dom";
import config from "../../../config";

const Container = styled.div`
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
  border-left: 3px;
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

const CategoryName = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
const CategoryDescription = styled.div`
  font-size: 12px;
`;

const Category = props => {
  const { category } = props;
  const recentPost = category.posts[0] || {};

  return (
    <Container>
      <div>
        <Link to="/profile">
          <Avatar
            size="50"
            imgUrl="http://fleshas.lt/images/avatars/imgres[6168].jpg"
          />
        </Link>
      </div>
      <div className="col-sm-5">
        <Link to={`/forum/${category.slug}`}>
          <CategoryName>{category.name}</CategoryName>
          <CategoryDescription className="text-muted">
            {category.description}
          </CategoryDescription>
        </Link>
      </div>

      <ViewsColumn>
        <ImportantBig>{category.post_count}</ImportantBig>
        <NotImportant>Pranešimai</NotImportant>
      </ViewsColumn>
      <AnswersColumn style={{ borderRight: `4px solid ${category.bgColor}` }}>
        <ImportantBig>{category.topic_count}</ImportantBig>
        <NotImportant>Temos</NotImportant>
      </AnswersColumn>
      {recentPost.user ? (
        <LastPost>
          {/* <div>{JSON.stringify(recentPost)}</div> */}
          <div className="mr-2 pl-3">
            <Link to={`/profile/${recentPost.user.userslug}`}>
              <Important>{recentPost.user.username}</Important>
            </Link>
            {/* <div>{recentPost.topic.title}</div> */}
            <small className="text-muted">{recentPost.content}</small>
            <NotImportant className="float-right">
              {props.postDate}
            </NotImportant>
          </div>
          <Link to="/profile">
            <Avatar
              size="40"
              circle={true}
              imgUrl={config.ROOT_URL + recentPost.user.picture}
            />
          </Link>
        </LastPost>
      ) : (
        <div className="text-muted float-right pl-3">Nėra temų</div>
      )}
    </Container>
  );
};

export default Category;
