import { chatConstants } from "../_constants";

function openChat(chat) {
  return { type: chatConstants.OPEN_CHAT, chat };
}

function closeChat(chat) {
  return { type: chatConstants.CLOSE_CHAT, chat };
}

const chatActions = {
  openChat,
  closeChat
};

export default chatActions;
