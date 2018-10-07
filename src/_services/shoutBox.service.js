import axios from "axios";
import { authHeader } from "../_helpers";
import config from "../config";

const NEW_MESSAGE_API_URL = config.API_URL + "/newMessageShoutbox";
const LIKE_MESSAGE_API_URL = config.API_URL + "/likeMessageShoutbox";

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
    .get(config.API_URL + "/shoutbox")
    .then(result => {
      //debugger;
      //check structure
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
