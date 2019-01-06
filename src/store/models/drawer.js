export const drawer = {
  name: "drawer",
  state: {
    isOpen: false
  },
  reducers: {
    toggleDrawer(state, payload) {
      return { ...state, isOpen: payload.isOpen };
    }
  }
};
