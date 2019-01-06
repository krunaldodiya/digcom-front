const UPDATE_AUTH_USER = "UPDATE_AUTH_USER";
const UPDATE_AUTH_USER_SUCCESS = "UPDATE_AUTH_USER_SUCCESS";
const UPDATE_AUTH_USER_FAIL = "UPDATE_AUTH_USER_FAIL";

const updateAuthUser = payload => {
  return {
    type: UPDATE_AUTH_USER,
    payload
  };
};

const updateAuthUserSuccess = payload => {
  return {
    type: UPDATE_AUTH_USER_SUCCESS,
    payload
  };
};

const updateAuthUserFail = payload => {
  return {
    type: UPDATE_AUTH_USER_FAIL,
    payload
  };
};

export {
  UPDATE_AUTH_USER,
  UPDATE_AUTH_USER_SUCCESS,
  UPDATE_AUTH_USER_FAIL,
  updateAuthUser,
  updateAuthUserSuccess,
  updateAuthUserFail
};
