import React, { Component } from "react";
import styled from "styled-components";
import { Box, Spinner } from "../../components";
import Forum from "./Forum";
import axios from "axios";

const API_URL = "http://fleshas.lt/php/api/forum/";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      servsersLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForForums();
  }

  requestForForums() {
    axios
      .get(API_URL)
      .then(response => {
        if (response.data.categories) {
          this.setState({
            categories: response.data.categories,
            categoriesLoading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          categoriesLoading: false,
          loadingError: true
        });
      });
  }

  render() {
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.categoriesLoading) {
      return (
        <Box>
          <Spinner />
        </Box>
      );
    }

    return (
      <Box>
        {this.state.categories.map(categorie => (
          <BoxHeader title={categorie.name} forums={categorie.forums} />
        ))}
      </Box>
    );
  }
}

const BoxHeaderContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 24px;
  border-bottom: 1px solid #e4e7ed;
  border-top: 1px solid #e4e7ed;
  background: #f7f7f7;
  color: ${props => props.theme.FORUMS_CATEGORY_HEADER_TEXT_COLOR};
`;

const BoxHeaderTitle = styled.h4`
  font-size: 16px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  margin-bottom: 0;
  text-transform: uppercase;
  font-style: normal;
`;

const BoxHeader = props => (
  <div>
    <BoxHeaderContainer>
      <BoxHeaderTitle>{props.title}</BoxHeaderTitle>
    </BoxHeaderContainer>
    {props.forums.map(forum => (
      <Forum
        name={forum.forum_name}
        posts={forum.forum_postcount}
        threads={forum.forum_threadcount}
        lastPostAuthorName={forum.user_name}
        lastPostAuthorAvatar={
          "http://fleshas.lt/images/avatars/" + forum.user_avatar
        }
        forumId={forum.forum_id}
        postDate="Vakar"
      />
    ))}
  </div>
);

export default ServerList;
