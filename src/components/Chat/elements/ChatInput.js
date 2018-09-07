import React, { Component } from "react";
import styled from "styled-components";
import EmojiButton from "../EmojiButton";
//https://www.npmjs.com/package/emoji-picker-react

const InputContainer = styled.div`
  border-top: 1px solid #ccc5c5;
`;

const Input = styled.input`
  border-radius: 0px;
  border: none;
  padding-left: 7px;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`;

const SubmitIcon = styled.i`
  color: ${props => props.theme.PRIMARY_COLOR};
  filter: brightness(150%);
  &:hover {
    filter: brightness(300%);
  }
`;

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.submitButton = React.createRef();
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <InputContainer>
        <form onSubmit={this.handleMessageSubmit}>
          <Input
            type="text"
            placeholder="Parašyk žinutę..."
            autoComplete="off"
            value={this.state.message}
            innerRef={el => {
              this.input = el;
            }}
            onChange={e => {
              this.setState({ message: e.target.value });
            }}
          />
          <input type="submit" ref={this.submitButton} className="d-none" />
        </form>
        <div className="d-flex">
          <div>
            <EmojiButton onEmojiSelect={this.onEmojiSelect} />
          </div>
          <div className="ml-auto">
            {this.state.message ? (
              <SubmitIcon
                className="material-icons mr-1 fadeMe"
                onClick={() => this.submitButton.current.click()}
              >
                send
              </SubmitIcon>
            ) : null}
          </div>
        </div>
      </InputContainer>
    );
  }

  handleMessageSubmit(e) {
    e.preventDefault();

    if (this.state.message.length < 1) return false;

    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  }

  onEmojiSelect(emoji) {
    this.setState((prevState, props) => {
      return { message: prevState.message + emoji };
    });

    this.input.focus();
  }
}

export default ChatInput;
