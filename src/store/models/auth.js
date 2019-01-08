import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { getAuthMobile, makeRequest, setAuthToken } from "../../services";

export const auth = {
  name: "auth",
  state: {
    authUser: {
      name: null,
      dob: null,
      gender: "Male",
      marital_status: "Single",
      avatar:
        "http://hostelarabas.gr/wp-content/plugins/wp-first-letter-avatar/images/default/128/mystery.png"
    },
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
          console.log(error);
        }
      },
      async login(payload) {
        const { authUser, member, navigation } = payload;

        try {
          const response = await makeRequest(api.login, { user_id: member.id });

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(token);

          if (authUser) {
            navigation.goBack();
          } else {
            navigation.replace(getInitialScreen(user));
          }
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      },
      async register(payload) {
        const { navigation, community_id } = payload;
        const mobile = await getAuthMobile();

        try {
          const response = await makeRequest(api.register, {
            community_id,
            mobile
          });

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(token);

          navigation.replace(getInitialScreen(user));
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      },
      async updateAuthUser(payload) {
        const { navigation, authUser } = payload;

        try {
          const response = await makeRequest(api.updateUserProfile, {
            ...authUser,
            profile_updated: true
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
