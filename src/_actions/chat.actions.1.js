import { chatConstants } from "../_constants";

function openChat(userId) {
  return { type: chatConstants.OPEN_CHAT, userId };
}
function closeChat(userId) {
  return { type: chatConstants.CLOSE_CHAT, userId };
}

const chatActions = {
  openChat,
  closeChat
};

export default chatActions;
