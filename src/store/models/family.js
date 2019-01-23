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
        const { member_id } = payload;

        try {
          const response = await makeRequest(api.removeMember, { member_id });

          const { data } = response;
          const { user } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
        } catch (error) {
          console.log(error);
        }
      },
      async addMember(payload) {
        const { navigation, relation } = payload;

        try {
          const response = await makeRequest(api.addMember, relation);

          const { data } = response;
          const { user } = data;

          dispatch.auth.setAuthUser({ authUser: user });

          navigation.replace("UpdateMemberScreen", { member: user });
        } catch (error) {
          console.log(error);
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
