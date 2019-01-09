import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const family = {
  name: "family",
  state: {
    authUser: {
      name: null,
      dob: null,
      gender: "Male",
      avatar:
        "https://res.cloudinary.com/marusamaj/image/upload/v1547011790/microsoft-avatar.png",
      marital_status: "Single",
      relation: "Self"
    },
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async switchMember(payload) {
        const { member, navigation } = payload;

        try {
          const response = await makeRequest(api.login, { user_id: member.id });

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(token);

          navigation.pop();
        } catch (error) {
          dispatch.auth.setAuthUser({ errors: error.response.data });
        }
      },
      async addMember(payload) {
        const { navigation, authUser } = payload;

        try {
          const response = await makeRequest(api.register, authUser);

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(token);

          navigation.pop();
        } catch (error) {
          this.setAuthUser({ errors: error.response.data });
        }
      }
    };
  }
};
