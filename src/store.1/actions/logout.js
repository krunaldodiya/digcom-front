const LOGOUT = "LOGOUT";

const logout = payload => {
  return {
    type: LOGOUT,
    payload
  };
};

export { LOGOUT, logout };
