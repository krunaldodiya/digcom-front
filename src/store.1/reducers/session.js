import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "../actions";

const initialState = {
  mobile: null,
  username: null,
  password: null,
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        mobile: null,
        loading: false,
        loaded: true
      };
    }

    case REGISTER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case REGISTER_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
};
