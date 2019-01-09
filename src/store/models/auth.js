import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest } from "../../services";

export const auth = {
  name: "auth",
  state: {
    authUser: null,
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    },
    setAuthUser(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async getAuthUser(payload, rootState) {
        try {
          const response = await makeRequest(api.me);
          const { data } = response;

          dispatch.auth.setAuthUser({ authUser: data.user, errors: null });
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      },
      async updateAuthUser(payload) {
        const { navigation, authUser } = payload;

        try {
          const response = await makeRequest(api.updateUserProfile, {
            ...authUser,
            status: true
          });

          const { data } = response;
          const { user } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          navigation.replace(getInitialScreen(user));
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      }
    };
  }
};
