const INIT = "INIT";

const init = payload => {
  return {
    type: INIT,
    payload
  };
};

export {
  INIT,
  init,
};
