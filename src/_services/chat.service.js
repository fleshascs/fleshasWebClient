import config from "../config";
import { authHeader } from "../_helpers";
import userService from "./user.service";

const chatService = {
  GetConversationHistory,
  sendMessage,
  countUnreadMessage
};

function GetConversationHistory(conversationData) {
  const data = new FormData();
  data.set("conversationId", parseInt(conversationData.conversation_id) || "");
  data.set("to", parseInt(conversationData.oponent_id) || "");
  data.set("group_chat", +conversationData.group_chat);

  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data
  };

  return fetch(`${config.API_URL}/GetConversationHistory`, requestOptions).then(
    handleResponse
  );
}

function sendMessage(messageData) {
  const data = new FormData();
  data.set("message", messageData.message);
  data.set("conversationId", parseInt(messageData.conversationId) || "");
  data.set("to", parseInt(messageData.to) || "");
  data.set("group_chat", +messageData.group_chat);

  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data
  };

  return fetch(`${config.API_URL}/sendMessage`, requestOptions).then(
    handleResponse
  );
}

function countUnreadMessage() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.API_URL}/unreadMessages`, requestOptions).then(
    handleResponse
  );
}

export default chatService;

//---------------------------------

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        window.history.push("/login");
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
