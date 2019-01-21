import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const family = {
  name: "family",
  state: {
    member: null,
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async removeMember(payload) {
        const { member, navigation } = payload;

        try {
          const response = await makeRequest(api.removeMember, {
            user_id: member.id
          });

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
          const response = await makeRequest(api.addMember, authUser);

          const { data } = response;
          const { user, token } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          await setAuthToken(token);

          navigation.pop();
        } catch (error) {
          this.setAuthUser({ errors: error.response.data });
        }
      },
      async updateMember(payload) {
        const { navigation, authUser } = payload;

        try {
          const response = await makeRequest(api.updateMember, authUser);

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
