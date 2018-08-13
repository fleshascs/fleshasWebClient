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

const NumberOfMessages2 = styled.div`
  position: absolute;
  top: -8px;
  color: #ffffff;
  background: ${props => props.theme.UNREAD_MESSAGES_COUNTER_BG_COLOR};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
  left: 12px;
  line-height: 20px;
}
`;

const NumberOfMessages = styled.div`
position: absolute;
top: -8px;
border-radius: 50%;
height: 20px;
width: 20px;
text-align: center;
left: 12px;
background: #fff;
border-radius: 10px;
box-shadow: 1px 1px 3px 0 #dadde1;
color: #8d949e;
font-weight: normal;
line-height: 17px;
border: 1px solid #f3f3f3;
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
        <i className={classList}>mail_outline</i>

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
