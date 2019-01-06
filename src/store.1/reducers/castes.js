import { GET_CASTES, GET_CASTES_FAIL, GET_CASTES_SUCCESS } from "../actions";

const initialState = {
  data: [],
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CASTES: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_CASTES_SUCCESS: {
      return {
        ...state,
        data: action.payload.castes,
        loading: false,
        loaded: true
      };
    }

    case GET_CASTES_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        data: [],
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
};
