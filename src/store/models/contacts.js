import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const contacts = {
  name: "contacts",
  state: {},
  reducers: {},
  effects: dispatch => {
    return {
      async updateUserContacts(payload, rootState) {
        const { contacts } = payload;

        try {
          const response = await makeRequest(api.updateUserContacts, {
            contacts
          });
          
          const { data } = response;

          dispatch.auth.setAuthUser({ authUser: data.user, errors: null });
        } catch (error) {
          console.log(error);
        }
      }
    };
  }
};
