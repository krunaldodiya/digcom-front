const REGISTER = "REGISTER";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

const register = payload => {
  return {
    type: REGISTER,
    payload
  };
};

const registerSuccess = payload => {
  return {
    type: REGISTER_SUCCESS,
    payload
  };
};

const registerFail = payload => {
  return {
    type: REGISTER_FAIL,
    payload
  };
};

export {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  register,
  registerSuccess,
  registerFail
};
