import React, { Component } from "react";
import { EmojiButton, PhotoUploadButton } from "../../components";
import Message from "./Message";
import "./taiKasNepavykoSuStyledComponents.css";
import io from "socket.io-client";
import { shoutBoxService } from "../../_services";
import shoutbox from "./shoutBox.css.js";
import MoreMessagesToScroll from "./MoreMessagesToScroll";

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [],
      messagesLoading: true,
      loadingError: false,
      showScrollHelper: false
    };

    this.onEmojiSelect = this.onEmojiSelect.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);

    this.messagesEnd = React.createRef();
    this.scrollableBox = React.createRef();
  }

  onEmojiSelect(e) {
    console.log(e);
  }

  componentWillMount() {
    this.newMsgAudio = new Audio("/sounds/newMessageShoutbox.mp3");
    this.requestForMessages();

    const socket = io("http://185.80.128.99:8080");
    socket.on("shoutbox::message", this.addMessage);
    socket.on("shoutbox::messageUpdated", this.updateMessage);
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
      return <div>kraunasi...</div>;
    }

    return (
      <shoutbox.Container>
        <shoutbox.ShoutboxContainer
          onScroll={this.handleScroll}
          innerRef={this.scrollableBox}
          className="mt-2"
        >
          <shoutbox.MessgesList>
            {this.state.messages.map(this.renderMessage)}
          </shoutbox.MessgesList>
          <div ref={this.messagesEnd} className="pt-3" />
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

  //tikriausiai reiktu prideti debounce
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

  renderMessage(msg) {
    return (
      <Message
        userId={parseInt(msg.user_id)}
        likes={msg.likes}
        name={msg.username}
        avatar={msg.user_avatar}
        message={msg.message}
        id={msg.message_id}
        key={msg.message_id}
      />
    );
  }

  //gal reiketu perdet i shoutbox service ir i shoutbox componenta perduot nauja message lista
  //bet ar tada nereiktu turet kazkoki store
  addMessage(data) {
    this.newMsgAudio.play();

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

    //su firefox visa body numesdavo zemyn
    //su chrome veike
    /*  el.scrollIntoView({
      behavior: "instant", //{ behavior: "smooth" }
      block: "end",
      inline: "nearest"
    }); */
  }

  handleMessageChange(e) {
    this.setState({ message: e.currentTarget.value });
  }

  handleMessageSubmit() {
    shoutBoxService.sendMessage(this.state.message);
    this.setState({ message: "" });
  }
}

export default ServerList;

//https://bootsnipp.com/snippets/exR5v
//https://medium.freecodecamp.org/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a
//https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
//https://stackoverflow.com/questions/25974527/scroll-element-into-view-at-bottom-of-page

/*

shoutsScrollThem: function()
	{
		var area = $( 'shoutbox-shouts' );

		if ( ipb.shoutbox.shout_order == 'asc' )
		{
			area.scrollTop = area.scrollHeight - parseInt( area.getHeight() ) + 500;
		}
		else
		{
			area.scrollTop = 0;
		}
  },
 */
