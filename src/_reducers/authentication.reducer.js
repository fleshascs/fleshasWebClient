import { userConstants } from "../_constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        loggingInFailed: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        loggingInFailed: false
      };
    case userConstants.LOGIN_FAILURE:
    case userConstants.AUTH_FAILURE:
      return {
        loggingInFailed: true
      };
    case userConstants.GET_MY_DETAILS_REQUEST:
      //debugger;
      const userData = { user: { ...state.user, ...action.user } };
      return {
        ...state,
        ...userData
      };
    case userConstants.LOGOUT:
      return {
        loggingInFailed: false
      };
    default:
      return state;
  }
}
