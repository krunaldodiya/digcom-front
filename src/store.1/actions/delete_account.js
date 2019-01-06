const DELETE_ACCOUNT = "DELETE_ACCOUNT";
const DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS";
const DELETE_ACCOUNT_FAIL = "DELETE_ACCOUNT_FAIL";

const deleteAccount = payload => {
  return {
    type: DELETE_ACCOUNT,
    payload
  };
};

const deleteAccountSuccess = payload => {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
    payload
  };
};

const deleteAccountFail = payload => {
  return {
    type: DELETE_ACCOUNT_FAIL,
    payload
  };
};

export {
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
  deleteAccount,
  deleteAccountSuccess,
  deleteAccountFail
};
