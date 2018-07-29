import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Spinner } from "../../components";

const REST_API_URL = "http://ts.fleshas.lt/csserver/players";

const PlayerListContainer = styled.div`
  position: absolute;
  border-radius: 3px;
  border: 1px solid #ececec;
  width: 300px;
  height: 300;
  background-color: #fff;
  z-index: 2;
`;

const LoadingPlayerListContainer = PlayerListContainer.extend`
  height: 300px;
`;

class OnlinePlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      loading: true,
      loadingError: false
    };
  }

  componentWillMount() {
    this.requestForPlayersOnline();
  }

  requestForPlayersOnline() {
    const URL = `${REST_API_URL}?server_ip=${
      this.props.server.ip
    }&server_port=${this.props.server.port}`;
    //const URL = "http://fleshas.lt/php/api/servers/players/";
    axios
      .get(URL, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        if (response.data.players) {
          this.setState({
            players: response.data.players,
            loading: false
          });
          return;
        }
        throw "netinkama struktura";
      })
      .catch(error => {
        this.setState({
          loading: false,
          loadingError: true
        });
      });
  }

  render() {
    //jeigu klaida
    if (this.state.loadingError) {
      return (
        <LoadingPlayerListContainer>ivyko klaida!</LoadingPlayerListContainer>
      );
    }

    if (this.state.loading) {
      return (
        <LoadingPlayerListContainer>
          <Spinner />
        </LoadingPlayerListContainer>
      );
    }

    return (
      <PlayerListContainer>
        <div className="pt-3 py-2">
          {this.props.server.ip}:{this.props.server.port}
        </div>
        {this.state.players.map((player, index) => (
          <Player index={index} player={player} key={player.Name} />
        ))}
      </PlayerListContainer>
    );
  }
}

export default OnlinePlayers;

const Player = props => (
  <div className="row pt-2">
    <div className="col">{props.index + 1}</div>
    <div className="col">{props.player.Name}</div>
    <div className="col">frags: {props.player.Frags}</div>
  </div>
);
