import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "../../components";
import Post from "./Post";
import axios from "axios";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servers: [],
      servsersLoading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForServers();
  }

  requestForServers() {
    axios
      .get("http://185.80.128.99/csserver/")
      .then(response => {
        if (response.data.servers) {
          this.setState({
            servers: response.data.servers,
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
        <BoxHeader title="Naujausių temų sąrašas" />
        {this.state.servers.map((server, index) => (
          <Post
            url="http://www.fleshas.lt"
            user={{
              username: "fleshas.lt",
              avatar: "http://fleshas.lt/images/avatars/chaga8j.gif"
            }}
            postDate="Vakar"
            threadViews={105}
            threadPosts={5}
            threadTilte="[Apklausa] H1Ro"
            threadCategory="Apie betka"
            key={"asd" + index}
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
