const getInitialScreen = (authUser, authMobile = null) => {
  if (authUser) {
    const { profile_updated } = authUser;

    if (!profile_updated) {
      return "ManageProfileScreen";
    }

    return "TabsScreen";
  }

  if (authMobile) {
    return "AccountListScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
