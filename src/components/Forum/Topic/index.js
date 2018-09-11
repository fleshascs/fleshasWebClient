import React, { Component } from "react";
import styled from "styled-components";
import { Box, Spinner } from "../../../components";
import Post from "./Post";
import axios from "axios";
import config from "../../../config";
import { withRouter } from "react-router-dom";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {},
      topicId: this.props.match.params.number,
      posts: [],
      servsersLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForThreads();
  }

  requestForThreads() {
    axios
      .get(config.API_URL + "/topic/" + this.state.topicId)
      .then(response => {
        console.log("----topic---");
        console.log(response.data.posts);
        //debugger;
        if (response.data.posts) {
          this.setState({
            category: response.data,
            posts: response.data.posts,
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
      return <Spinner />;
    }

    return (
      <div>
        <BoxHeader>Pradžia / Kategorija / welcome-to-your-nodebb</BoxHeader>

        <Box>
          {this.state.posts.map((post, index) => (
            <Post post={post} key={1} />
          ))}
        </Box>
      </div>
    );
  }
}

const BoxHeaderContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 24px;
  /*  border-bottom: 1px solid #e4e7ed;
  border-top: 1px solid #e4e7ed;
  background: #f7f7f7; */
  color: ${props => props.theme.PRIMARY_COLOR};
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
    <BoxHeaderTitle>{props.children}</BoxHeaderTitle>
  </BoxHeaderContainer>
);

export default withRouter(ServerList);
