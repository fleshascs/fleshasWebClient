import { chatConstants } from "../_constants";

let chatUsers = JSON.parse(localStorage.getItem("chatUsers"));
const initialState = { chatUsers: chatUsers || [] };

export default function chat(state = initialState, action) {
  switch (action.type) {
    case chatConstants.OPEN_CHAT:
      const chats = [...new Set([...state.chatUsers, action.userId])];

      //update localstorage state
      localStorage.setItem("chatUsers", JSON.stringify(chats));

      return {
        ...state,
        chatUsers: chats
      };
    case chatConstants.CLOSE_CHAT:
      let newChatUsersState = state.chatUsers.slice();
      const index = newChatUsersState.indexOf(action.userId);

      if (index > -1) {
        newChatUsersState.splice(index, 1);
      }

      //update localstorage state
      localStorage.setItem("chatUsers", JSON.stringify(newChatUsersState));

      return {
        ...state,
        chatUsers: newChatUsersState
      };
    default:
      return state;
  }
}
