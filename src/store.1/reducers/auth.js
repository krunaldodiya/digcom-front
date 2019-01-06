import {
  ADD_RELATION,
  ADD_RELATION_FAIL,
  ADD_RELATION_SUCCESS,
  CHANGE_AVATAR,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_SUCCESS,
  GET_AUTH_USER,
  GET_AUTH_USER_FAIL,
  GET_AUTH_USER_SUCCESS,
  UPDATE_AUTH_USER,
  UPDATE_AUTH_USER_FAIL,
  UPDATE_AUTH_USER_SUCCESS,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_FAIL,
  UPDATE_SETTINGS_SUCCESS
} from "../actions";

const initialState = {
  authUser: null,
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_AUTH_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case GET_AUTH_USER_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_AUTH_USER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case UPDATE_AUTH_USER_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_AUTH_USER_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case ADD_RELATION: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case ADD_RELATION_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        errors: null,
        loading: false,
        loaded: true
      };
    }

    case ADD_RELATION_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case CHANGE_AVATAR: {
      return {
        ...state,
        authUser: action.payload.authUser
      };
    }

    case DELETE_ACCOUNT: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case DELETE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case DELETE_ACCOUNT_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_SETTINGS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        loading: true,
        loaded: false
      };
    }

    case UPDATE_SETTINGS_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.authUser,
        loading: false,
        loaded: true
      };
    }

    case UPDATE_SETTINGS_FAIL: {
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
