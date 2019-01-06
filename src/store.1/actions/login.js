const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const login = payload => {
  return {
    type: LOGIN,
    payload
  };
};

const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

const loginFail = payload => {
  return {
    type: LOGIN_FAIL,
    payload
  };
};

export {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  login,
  loginSuccess,
  loginFail
};
