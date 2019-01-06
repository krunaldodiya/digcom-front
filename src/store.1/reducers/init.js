import { INIT } from "../actions";

const initialState = {
  initialized: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT: {
      return {
        ...state,
        initialized: true
      };
    }

    default:
      return state;
  }
};
