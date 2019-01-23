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
    },
    setMember(state, payload) {
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
          dispatch.family.editMember({
            member: user,
            navigation,
            action: "replace"
          });
        } catch (error) {
          console.log(error);
        }
      },

      async updateMember(payload) {
        const { navigation, member } = payload;

        try {
          const response = await makeRequest(api.updateMember, {
            member
          });

          const { data } = response;
          const { user } = data;

          dispatch.auth.setAuthUser({ authUser: user, errors: null });
          navigation.pop();
        } catch (error) {
          this.setAuthUser({ errors: error.response.data });
        }
      },
      
      async editMember(payload) {
        const { navigation, member, action } = payload;

        dispatch.family.setMember({ member });

        if (navigation) {
          if (action === "replace") {
            navigation.replace("UpdateMemberScreen");
          }

          if (action === "push") {
            navigation.push("UpdateMemberScreen");
          }
        }
      }
    };
  }
};
