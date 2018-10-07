import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "../../components";
import Post from "./Post";
import axios from "axios";
import config from "../../config";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      servsersLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForTopics();
  }

  requestForTopics() {
    axios
      .get(config.API_URL + "/recent")
      .then(response => {
        if (response.data.topics) {
          this.setState({
            topics: response.data.topics,
            servsersLoading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          servsersLoading: false,
          loadingError: true
        });
      });
  }

  render() {
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.servsersLoading) {
      return <div>kraunasi...</div>;
    }

    return (
      <Box className={this.props.className}>
        <BoxHeader title="Naujausių temų sąrašas" />
        {this.state.topics.map(topic => (
          <Post
            url={topic.slug}
            user={{
              username: topic.user.username,
              avatar: config.ROOT_URL + topic.user.picture
            }}
            postDate={topic.lastposttime}
            threadViews={topic.viewcount}
            threadPosts={topic.postcount}
            threadTilte={topic.title}
            threadCategory={topic.category.name}
            key={topic.slug}
          />
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
  <BoxHeaderContainer>
    <BoxHeaderTitle>{props.title}</BoxHeaderTitle>
  </BoxHeaderContainer>
);

export default ServerList;
