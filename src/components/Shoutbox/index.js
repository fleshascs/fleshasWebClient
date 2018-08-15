import React, { Component } from "react";
import { EmojiButton, PhotoUploadButton } from "../../components";
import Message from "./Message";
import { shoutBoxService } from "../../_services";
import shoutbox from "./shoutBox.css.js";
import MoreMessagesToScroll from "./MoreMessagesToScroll";
import { socketConnect } from "socket.io-react";
import ShoutsPlaceHolder from "./ShoutsPlaceHolder";
//import { throttle } from "lodash";

//const debounceWaitTime = 1000;
//const debounceOptions = { leading: true, trailing: true };

class ShoutboxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [],
      messagesLoading: true,
      loadingError: false,
      showScrollHelper: false,
      soundEnabled: true
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.toggleSound = this.toggleSound.bind(this);

    this.messagesEnd = React.createRef();
    this.scrollableBox = React.createRef();
  }

  onEmojiSelect(e) {
    console.log(e);
  }

  componentWillMount() {
    this.newMsgAudio = new Audio("/sounds/newMessageShoutbox.mp3");
    this.requestForMessages();

    this.props.socket.on("shoutbox::message", this.addMessage);
    this.props.socket.on("shoutbox::messageUpdated", this.updateMessage);
  }

  componentDidUpdate(prevProps, prevState) {
    //palyginimas bus false neigu bus pamegta zinute nors ir masyvai skirsis
    //taciau tai yra gerai, nes mes nenorim nuscrollint i apacia, kai gaunamas like
    const haveNewMessages = this.state.messages != prevState.messages;
    if (haveNewMessages && !this.state.showScrollHelper) {
      this.scrollToElement(this.messagesEnd.current);
    }
  }

  render() {
    //jeigu klaida
    if (this.state.loadingError) {
      return <div>ivyko klaida!</div>;
    }

    if (this.state.messagesLoading) {
      return <ShoutsPlaceHolder />;
    }

    return (
      <shoutbox.Container>
        <div className="text-right mt-1 px-2" onClick={this.toggleSound}>
          <i className="material-icons text-muted" style={{ fontSize: "18px" }}>
            {this.state.soundEnabled ? "volume_up" : "volume_off"}
          </i>
        </div>
        {/* onScroll={this.handleScroll} */}
        {/* onScroll={this.throttledWindowHandler.bind(this)} */}
        <shoutbox.ShoutboxContainer
          onScroll={this.handleScroll}
          innerRef={this.scrollableBox}
        >
          <shoutbox.MessgesList>
            {this.state.messages.map(this.renderMessage)}
          </shoutbox.MessgesList>
          <div ref={this.messagesEnd} />
        </shoutbox.ShoutboxContainer>

        <MoreMessagesToScroll
          show={this.state.showScrollHelper}
          onClick={() => this.scrollToElement(this.messagesEnd.current)}
        />

        <div className="mx-3 py-3">
          <shoutbox.Textarea
            className="w-100 textarea"
            onChange={this.handleMessageChange}
            value={this.state.message}
          />
          <div className="d-flex">
            <EmojiButton onEmojiClick={this.onEmojiSelect} />
            <PhotoUploadButton />
            <shoutbox.SubmitButton
              className="ml-auto"
              onClick={this.handleMessageSubmit}
            >
              Siųsti
            </shoutbox.SubmitButton>
          </div>
        </div>
      </shoutbox.Container>
    );
  }

  //https://codesandbox.io/s/04v892702v
  /*  throttledWindowHandler = throttle(
    this.handleScroll,
    debounceWaitTime,
    debounceOptions
  ); */

  toggleSound() {
    this.setState((prevState, props) => {
      return { soundEnabled: !prevState.soundEnabled };
    });
  }

  //tikriausiai reiktu prideti debounce
  //panasu kad sita galima buvo padaryt 3x trumpesni
  handleScroll(e) {
    const containerHeight = e.target.offsetHeight;
    const scrollableAreaHeight = e.target.scrollHeight;
    const scrolledHeight = e.target.scrollTop;

    const scrollHeight = scrollableAreaHeight - containerHeight;
    const scrolledPercent = (scrolledHeight / scrollHeight) * 100;

    let showScrollHelper = false;
    if (scrolledPercent < 90) {
      showScrollHelper = true;
    }

    this.setState({ showScrollHelper });
  }

  //reikejo i viena props imest message={msg}
  renderMessage(msg) {
    return <Message likes={msg.likes} message={msg} key={msg.message_id} />;
  }

  //gal reiketu perdet i shoutbox service ir i shoutbox componenta perduot nauja message lista
  //bet ar tada nereiktu turet kazkoki store
  addMessage(data) {
    if (this.state.soundEnabled) {
      this.newMsgAudio.play();
    }

    this.setState(prevState => {
      return {
        messages: [...prevState.messages, data.message]
      };
    });
  }

  //ta pati ka ir su addMessage
  updateMessage(data) {
    this.setState(prevState => {
      const newMessage = data.message;
      const index = prevState.messages.findIndex(
        msg => msg.message_id === parseInt(newMessage.id)
      );

      prevState.messages[index] = {
        ...prevState.messages[index],
        ...newMessage
      };

      return {
        messages: prevState.messages
      };
    });
  }

  //ta pati ka ir su addMessage
  requestForMessages() {
    shoutBoxService
      .getNewestMessages()
      .then(messages => {
        this.setState({
          messages: messages,
          messagesLoading: false
        });
      })
      .catch(error => {
        this.setState({
          messagesLoading: false,
          loadingError: true
        });
      });
  }

  scrollToElement(el) {
    const scrollableBox = this.scrollableBox.current;
    scrollableBox.scrollTo(0, scrollableBox.scrollHeight);
  }

  handleMessageChange(e) {
    this.setState({ message: e.currentTarget.value });
  }

  handleMessageSubmit() {
    shoutBoxService.sendMessage(this.state.message);
    this.setState({ message: "" });
  }
}

export default socketConnect(ShoutboxComponent);
