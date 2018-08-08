import axios from "axios";
import { authHeader } from "../_helpers";

const API_BASE_URL = "http://ts.fleshas.lt:9000/api";

const NEW_MESSAGE_API_URL = API_BASE_URL + "/newMessageShoutbox";
const LIKE_MESSAGE_API_URL = API_BASE_URL + "/likeMessageShoutbox";
const NEWEST_MESSAGES_API_URL = API_BASE_URL + "/newestMessagesShoutbox";

const shoutBoxService = {
  sendMessage,
  getNewestMessages,
  likeMessage
};

//nauja zinute
function sendMessage(message) {
  const data = new FormData();
  data.set("message", message);

  return axios.post(NEW_MESSAGE_API_URL, data, {
    headers: authHeader()
  });
}

//naujausiu zinuciu sarasas
function getNewestMessages() {
  return axios
    .get(NEWEST_MESSAGES_API_URL)
    .then(result => {
      //chech structure
      if (!result.data.messages) {
        throw "netinkama struktura";
      }
      return result.data.messages;
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(error);
    });
}

/**
 *
 * @param {integer} id message id
 */
function likeMessage(id) {
  const data = new FormData();
  data.set("id", id);

  return axios.post(LIKE_MESSAGE_API_URL, data, {
    headers: authHeader()
  });
}

export default shoutBoxService;
