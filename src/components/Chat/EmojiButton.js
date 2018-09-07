import React, { Component } from "react";
import styled from "styled-components";
//https://www.npmjs.com/package/emoji-picker-react
//import EmojiPicker from "emoji-picker-react";

//https://github.com/missive/emoji-mart
//add custom emojis
//https://github.com/missive/emoji-mart#custom-emojis
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const EmojiContainer = styled.div`
  position: relative;
`;
const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 125%;
  //margin-bottom: 20px;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 10px;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

const MaterialIconButton = styled.i`
  color: #7d7878;
  border-radius: 50%;
  padding: 3px;

  &:hover {
    background: #e0e0e0;
    cursor: pointer;
  }
`;

class EmojiButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojiPickerOpened: false
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.onEmojiButtonClick = this.onEmojiButtonClick.bind(this);
  }

  onEmojiSelect(e) {
    //console.log(e.native);

    if (typeof this.props.onEmojiSelect === "function") {
      this.props.onEmojiSelect(e.native);
    }

    this.setState({ emojiPickerOpened: false });
  }

  onEmojiButtonClick() {
    this.setState({ emojiPickerOpened: !this.state.emojiPickerOpened });
  }

  render() {
    return (
      <EmojiContainer>
        <MaterialIconButton
          className="material-icons"
          onClick={this.onEmojiButtonClick}
        >
          sentiment_satisfied_alt
        </MaterialIconButton>
        {this.state.emojiPickerOpened ? (
          <EmojiPickerContainer>
            <Picker
              onSelect={this.onEmojiSelect}
              native={true}
              emojiSize={18}
            />
            {/* <EmojiPicker onEmojiClick={this.onEmojiSelect} /> */}
          </EmojiPickerContainer>
        ) : null}
      </EmojiContainer>
    );
  }
}

export default EmojiButton;
