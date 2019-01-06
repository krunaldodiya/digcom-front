import { normalize } from "normalizr";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import { userListSchema } from "../schema";

export const users = {
  name: "users",
  state: {
    data: {},
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
    setUsers(state, payload) {
      const data = normalize(payload.users.data, userListSchema);

      return { ...state, data: data.entities.users };
    }
  },
  effects: dispatch => {
    return {
      async getUsers(payload, rootState) {
        const { page, filters } = payload;

        try {
          const response = await makeRequest(api.getUsers, { page, filters });

          const { data } = response;
          const { users } = data;

          dispatch.users.setUsers({ users });
        } catch (error) {
          dispatch.users.setUsers({ errors: error.response.data });
        }
      }
    };
  }
};
