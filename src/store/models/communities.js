import { api } from "../../libs/api";
import { makeRequest } from "../../services";

export const communities = {
  name: "communities",
  state: {
    data: []
  },
  reducers: {
    setCommunities(state, payload) {
      return { ...state, data: payload.communities };
    }
  },
  effects: dispatch => {
    return {
      async getCommunities(payload, rootState) {
        try {
          const response = await makeRequest(api.getCommunities);

          const { data } = response;
          const { communities } = data;

          dispatch.communities.setCommunities({ communities });
        } catch (error) {
          dispatch.communities.setCommunities({ errors: error.response.data });
        }
      },

      async selectCommunity(payload, rootState) {
        const { navigation, community, select_community } = payload;

        try {
          const response = await makeRequest(api.selectCommunity, {
            community
          });

          const { data } = response;
          const { user } = data;

          dispatch.auth.setAuthUser({ authUser: user });
          navigation.replace(select_community ? "EventsScreen" : "TabsScreen");
        } catch (error) {
          console.log(error);
        }
      },
      async skipCommunity(payload, rootState) {
        try {
          await makeRequest(api.skipCommunity);
        } catch (error) {
          console.log(error);
        }
      }
    };
  }
};
