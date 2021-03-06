import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Spinner } from "../../components";
import OnlinePlayers from "./OnlinePlayers";
import ServersPlaceHolder from "./ServersPlaceHolder";
import ContentLoader from "react-content-loader";

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
      .get("http://fleshas.lt/php/api/servers/")
      .then(response => {
        if (response.data) {
          this.setState({
            servers: response.data,
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
    //jeigu klaida
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.servsersLoading) {
      return (
        <Box>
          <ServersPlaceHolder />
        </Box>
      );
    }

    return (
      <Box>
        {this.state.servers.map((server, index) => (
          <ServerListItem
            key={server.name}
            id={index + 1 < 10 ? "0" + (index + 1) : index + 1}
            name={
              server.name &&
              server.name.replace("[Fleshas.lt]", "").replace("24/7", "")
            }
            map={server.map}
            onlinePlayers={server.activeplayers}
            maxOnlinePlayers={server.maxplayers}
            server={server}
          />
        ))}
      </Box>
    );
  }
}

export default ServerList;

//--------------------------server list item------------------------------------//
const ServerListItemContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  &:hover {
    background: #ececec;
  }
`;

const ServerMap = styled.div`
  font-size: 12px;
  color: #9c9c9c;
`;

const ServerNameContainer = styled.div`
  flex: 1;
`;

const CircleOnlineStatus = styled.div`
  background: #42b72a;
  border-radius: 50%;
  height: 6px;
  margin: 0 3px 1px 0;
  vertical-align: middle;
  width: 6px;
  display: inline-block;
`;

const SmallDataColumn = styled.div`
  text-align: center;
  font-size: 12px;
  color: #9c9c9c;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
  position: relative;
  width: 100%;
  min-height: 1px;
`;

const NumberColumn = SmallDataColumn.extend`
  @media (max-width: 900px) {
    display: none;
  }
`;

const ServerNameColumn = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const PlayerListContainer = styled.div`
  position: absolute;
  border-radius: 3px;
  border: 1px solid #ececec;
  width: 300px;
  height: 500px;
  background-color: #fff;
  z-index: 2;
`;

class ServerListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      showPlayers: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  tryToShowOnlinePlayers() {
    //jeigu po 0.5s pele visdar ant sio componento
    setTimeout(() => {
      if (this.state.isHovering) {
        this.setState({ showPlayers: true });
      }
    }, 500);
  }

  onMouseEnter() {
    this.setState({ isHovering: true }, () => {
      this.tryToShowOnlinePlayers();
    });
  }

  onMouseLeave() {
    this.setState({ isHovering: false }, () => {
      this.setState({ showPlayers: false });
    });
  }

  render() {
    //console.log(this.props.server);
    return (
      <ServerListItemContainer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <NumberColumn>
          {this.props.id}
          {this.state.showPlayers ? (
            <OnlinePlayers server={this.props.server} />
          ) : null}
        </NumberColumn>
        <ServerNameColumn>
          <ServerNameContainer>
            <CircleOnlineStatus /> {this.props.name}
          </ServerNameContainer>
          <ServerMap>{this.props.map}</ServerMap>
        </ServerNameColumn>
        <SmallDataColumn>
          {this.props.onlinePlayers}/{this.props.maxOnlinePlayers}
        </SmallDataColumn>
      </ServerListItemContainer>
    );
  }
}

const BoxContainer = styled.div`
  box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
  position: relative;
  background: rgb(255, 255, 255);

  & > ${ServerListItemContainer} + ${ServerListItemContainer} {
    border-top: solid 1px rgba(0, 0, 0, 0.12);
  }
`;

class Box extends Component {
  render() {
    return <BoxContainer>{this.props.children}</BoxContainer>;
  }
}
