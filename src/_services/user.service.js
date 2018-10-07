import config from "../config";
import { authHeader } from "../_helpers";

const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  getMyDetails,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    //body: JSON.stringify({ username: username, password: password })
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${username}&password=${password}`
  };

  /*  fetch('http://localhost:4567/api/ns/login',{
    method: "POST",
   
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=fleshas.lt&password=dd123asd`
  } ) */

  return fetch(`${config.API_URL}/ns/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      //dispatch({ type: userConstants.GET_MY_DETAILS_REQUEST, user: user });

      // login successful if there's a jwt token in the response
      if (user.success.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user.success));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.API_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  //http://185.80.128.99:9000/api/user?id=1
  return fetch(`${config.API_URL}/user?id=${id}`, requestOptions).then(
    handleResponse
  );
}

function getMyDetails() {
  const requestOptions = {
    method: "POST",
    headers: authHeader()
  };

  return fetch(`${config.API_URL}/details`, requestOptions).then(
    handleResponse
  );
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${config.API_URL}/users/register`, requestOptions).then(
    handleResponse
  );
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${config.API_URL}/users/${user.id}`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  return fetch(`${config.API_URL}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.history.push("/login");
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export default userService;
