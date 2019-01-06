const CHANGE_AVATAR = "CHANGE_AVATAR";

const changeAvatar = payload => {
  return {
    type: CHANGE_AVATAR,
    payload
  };
};

export {
  CHANGE_AVATAR,
  changeAvatar,
};
