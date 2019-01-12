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
        const { communityData, navigation } = payload;

        try {
          const response = await makeRequest(api.selectCommunity, communityData);

          const { data } = response;
          const { communities } = data;

          dispatch.communities.setCommunities({ communities });
          navigation.goBack();
        } catch (error) {
          dispatch.communities.setCommunities({ errors: error.response.data });
        }
      },
      async skipCommunity(payload, rootState) {
        const { communityData, navigation } = payload;

        try {
          const response = await makeRequest(api.skipCommunity, communityData);

          const { data } = response;
          const { communities } = data;

          dispatch.communities.setCommunities({ communities });
          navigation.goBack();
        } catch (error) {
          dispatch.communities.setCommunities({ errors: error.response.data });
        }
      }
    };
  }
};
