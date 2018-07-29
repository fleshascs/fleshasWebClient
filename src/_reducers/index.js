import { combineReducers } from "redux";

//import translate from "./translate";
//import langList from "./langList";
import authentication from "./authentication.reducer";
import registration from "./registration.reducer";
import alert from "./alert.reducer";
import chat from "./chat.reducer";

// Combine all the reducers
const rootReducer = combineReducers({
  //translate,
  //langList
  authentication,
  registration,
  alert,
  chat
});

export default rootReducer;
