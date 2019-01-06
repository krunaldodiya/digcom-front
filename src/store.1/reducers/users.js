import {
  CHANGE_AVATAR,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  RESET_USERS,
  UPDATE_SETTINGS_SUCCESS
} from "../actions";

const initialState = {
  data: [],
  page: 1,
  last_page: null,
  total: null,
  filters: {
    keywords: null,
    father_city: null,
    mother_city: null,
    gender: "Any",
    marital_status: "Any"
  },
  errors: null,
  loading: false,
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_USERS: {
      return {
        ...state,
        ...initialState
      };
    }

    case GET_USERS: {
      return {
        ...state,
        ...action.payload,
        loading: true,
        loaded: false
      };
    }

    case GET_USERS_SUCCESS: {
      const { users } = action.payload;

      return {
        ...state,
        data: [...state.data, ...users.data],
        last_page: users.last_page,
        total: users.total,
        loading: false,
        loaded: true
      };
    }

    case GET_USERS_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        data: [],
        loading: false,
        loaded: true
      };
    }

    case UPDATE_SETTINGS_SUCCESS: {
      const { authUser } = action.payload;

      const users = state.data.map(user => {
        return user.id === authUser.id ? authUser : user;
      });

      return {
        ...state,
        data: users
      };
    }

    case CHANGE_AVATAR: {
      const { authUser } = action.payload;

      const users = state.data.map(user => {
        return user.id === authUser.id ? authUser : user;
      });

      return {
        ...state,
        data: users
      };
    }

    default:
      return state;
  }
};
