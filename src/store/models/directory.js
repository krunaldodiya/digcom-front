import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const directory = {
  name: "directory",
  state: {
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
    errors: null
  },
  reducers: {
    handleInput(state, payload) {
      return { ...state, ...payload };
    }
  },
  effects: dispatch => {
    return {
      async searchDirectory(payload) {
        try {
          const response = await makeRequest(api.searchDirectory);

          const { data } = response;
          const { users } = data;
          console.log(users);
        } catch (error) {
          this.setAuthUser({ errors: error.response.data });
        }
      }
    };
  }
};
