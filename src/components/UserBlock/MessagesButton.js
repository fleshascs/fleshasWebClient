import React, { Component } from "react";
import styled from "styled-components";
import { MessagesListPreview } from "../../components";

const MessagesButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  cursor: pointer;

  i.active {
    color: ${props => props.theme.PRIMARY_COLOR};
  }
`;

const NumberOfMessages = styled.div`
  position: absolute;
  top: -2px;
  color: #fff;
  left: 8px;
  
}
`;
const MessagesListPreviewContainer = styled.div`
  position: relative;
  left: -125px;
  top: 27px;
}
`;

class MessagesButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlayers: false
    };

    this.showPanel = this.showPanel.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
  }

  showPanel() {
    this.setState({ showPlayers: true });
  }

  hidePanel() {
    this.setState({ showPlayers: false });
  }

  render() {
    const classList =
      "material-icons mr-3" + (this.props.messagesCount ? " active" : "");
    return (
      <MessagesButtonContainer
        onMouseEnter={this.showPanel}
        onMouseLeave={this.hidePanel}
      >
        <i className={classList}>chat_bubble</i>
        <NumberOfMessages>{this.props.messagesCount}</NumberOfMessages>
        {this.state.showPlayers ? (
          <MessagesListPreviewContainer>
            <MessagesListPreview />
          </MessagesListPreviewContainer>
        ) : null}
      </MessagesButtonContainer>
    );
  }
}

export default MessagesButton;
