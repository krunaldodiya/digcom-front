import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const directory = {
  name: "directory",
  state: {
    authUser: null,
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
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async getMembers(payload) {
        try {
          const response = await makeRequest(api.getMembers);

          const { data } = response;
          const { users } = data;
          console.log(users);
        } catch (error) {
          this.setAuthUser({ errors: error.response.data });
        }
      },
      async switchMember(payload) {
        const { member, navigation } = payload;

        try {
          const response = await makeRequest(api.switchMember, {
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
      }
    };
  }
};
