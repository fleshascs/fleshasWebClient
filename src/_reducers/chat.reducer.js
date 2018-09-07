import { chatConstants } from "../_constants";
//import { parse } from "querystring";

let chatsOpened = JSON.parse(localStorage.getItem("chatsOpened"));
const initialState = { chatsOpened: chatsOpened || [] };

function findByOponent(chatsOpened, oponent_id) {
  return chatsOpened.findIndex(
    chat => !chat.group_chat && chat.oponent_id === oponent_id
  );
}

export default function chat(state = initialState, action) {
  switch (action.type) {
    case chatConstants.OPEN_CHAT:
      let chat = {};
      let chatAlreadyOpened = false;

      //patys atidarem chata paspaude ant userio (NE GROUP CHATAS)
      if (Number.isInteger(action.chat)) {
        chatAlreadyOpened = findByOponent(state.chatsOpened, action.chat);
        chat.oponent_id = action.chat; //nesamone bet taip jau gavos
        chat.group_chat = false;
        //debugger;
      }

      //atejo is socket arba paspaudem ant grupes (NE GROUP CHAT/GROUP CHAT)
      if (action.chat !== null && typeof action.chat === "object") {
        //GROUP CHAT
        if (parseInt(action.chat.group_chat)) {
          //debugger;
          chatAlreadyOpened = state.chatsOpened.findIndex(
            chat => chat.conversation_id === action.chat.conversation_id
          );
          chat.conversation_id = action.chat.conversation_id;
          chat.group_chat = true;

          //NE GROUP CHAT
        } else {
          //debugger;
          chatAlreadyOpened = findByOponent(
            state.chatsOpened,
            action.chat.sender.id
          );

          if (chatAlreadyOpened === -1) {
            chatAlreadyOpened = state.chatsOpened.findIndex(
              chat => chat.conversation_id === action.chat.conversation_id
            );
            if (chatAlreadyOpened >= 0) {
              chat.conversation_id =
                state.chatsOpened[chatAlreadyOpened].conversation_id;
            }
          }

          //jeigu visgi neatidarytas dar
          if (chatAlreadyOpened === -1) {
            chat.conversation_id = action.chat.conversation_id;
            chat.oponent_id = action.chat.sender.id;
          }

          chat.group_chat = false;
        }
      }

      //jeigu jau atidarytas nedarysim nieko
      if (chatAlreadyOpened != -1) {
        return state;
      }

      const chats = [...state.chatsOpened, chat];
      localStorage.setItem("chatsOpened", JSON.stringify(chats));

      return {
        ...state,
        chatsOpened: chats
      };

    case chatConstants.CLOSE_CHAT:
      let index = -1;
      let newChatsOpenedState = state.chatsOpened.slice();

      //GROUP CHAT
      if (action.chat.group_chat) {
        index = state.chatsOpened.findIndex(
          chat => chat.conversation_id === action.chat.conversation_id
        );
        //NE GROUP CHAT
      } else {
        index = findByOponent(state.chatsOpened, action.chat.oponent_id);
      }

      if (index === -1) {
        return state;
      }

      //ismetam chata is atidarytuju saraso
      newChatsOpenedState.splice(index, 1);
      localStorage.setItem("chatsOpened", JSON.stringify(newChatsOpenedState));

      return {
        ...state,
        chatsOpened: newChatsOpenedState
      };
    default:
      return state;
  }
}
