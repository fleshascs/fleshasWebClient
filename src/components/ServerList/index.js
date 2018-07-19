import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "../../components";

const ServerListItemContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
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
  padding-right: 15px;
  padding-left: 15px;
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

class ServerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
        <ServerListItem
          id="01"
          name="Fleshas.lt Public"
          map="css_cache"
          onlinePlayers="5"
          maxOnlinePlayers="32"
        />
      </Box>
    );
  }
}

const ServerListItem = props => (
  <ServerListItemContainer>
    <SmallDataColumn>{props.id}</SmallDataColumn>
    <ServerNameColumn>
      <ServerNameContainer>
        <CircleOnlineStatus /> {props.name}
      </ServerNameContainer>
      <ServerMap>{props.map}</ServerMap>
    </ServerNameColumn>
    <SmallDataColumn>
      {props.onlinePlayers}/{props.maxOnlinePlayers}
    </SmallDataColumn>
  </ServerListItemContainer>
);

export default ServerList;
