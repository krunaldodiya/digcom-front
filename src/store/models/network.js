export const network = {
  name: "network",
  state: {
    connection: null
  },
  reducers: {
    networkChange(state, payload) {
      return { ...state, ...payload };
    }
  }
};
