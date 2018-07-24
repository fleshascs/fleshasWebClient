import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "../../components";
import Post from "./Thread";
import axios from "axios";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: [],
      servsersLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForThreads();
  }

  requestForThreads() {
    axios
      .get(
        "http://www.fleshas.lt/php/api/forum/forumThreads/?forum_id=4&rowstart=0"
      )
      .then(response => {
        if (response.data.threads) {
          this.setState({
            threads: response.data.threads,
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
      <Box>
        <BoxHeader title="..." />
        {this.state.threads.map((thread, index) => (
          <Post
            name={thread.thread_subject}
            url="http://www.fleshas.lt"
            user={{
              username: "fleshas.lt",
              avatar: "http://fleshas.lt/images/avatars/33944[1899].gif"
            }}
            author={{
              username: "fleshas.lt",
              avatar: "http://fleshas.lt/images/avatars/33944[1899].gif"
            }}
            postDate="Vakar"
            views={thread.thread_views}
            posts={thread.thread_postcount}
            threadTilte="[Apklausa] H1Ro"
            threadCategory="Apie betka"
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
  border-top: 1px solid #e4e7ed;
  background: #f7f7f7;
  color: #9278de;
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
