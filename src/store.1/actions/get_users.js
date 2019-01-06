const RESET_USERS = "RESET_USERS";
const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAIL = "GET_USERS_FAIL";

const resetUsers = payload => {
  return {
    type: RESET_USERS,
    payload
  };
};

const getUsers = payload => {
  return {
    type: GET_USERS,
    payload
  };
};

const getUsersSuccess = payload => {
  return {
    type: GET_USERS_SUCCESS,
    payload
  };
};

const getUsersFail = payload => {
  return {
    type: GET_USERS_FAIL,
    payload
  };
};

export {
  RESET_USERS,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  resetUsers,
  getUsers,
  getUsersSuccess,
  getUsersFail
};
