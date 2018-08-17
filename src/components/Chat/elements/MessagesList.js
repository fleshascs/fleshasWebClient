import React, { Component } from "react";
import Message from "./Message";
import { Spinner } from "../../../components";

class Messages extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <div className="mx-2">
        {this.props.messages.map((message, index) => {
          const previosMessage = this.props.messages[index - 1];
          const secondMessage = this.props.messages[index + 1];

          const previousSenderSame =
            previosMessage && previosMessage.sender.id == message.sender.id;
          const secondSenderSame =
            secondMessage && secondMessage.sender.id == message.sender.id;

          return (
            <Message
              message={message}
              key={message.id}
              previousSenderSame={previousSenderSame}
              secondSenderSame={secondSenderSame}
            />
          );
        })}
      </div>
    );
  }
}
export default Messages;
