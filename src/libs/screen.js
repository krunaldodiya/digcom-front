const getInitialScreen = authUser => {
  if (authUser) {
    const { status, setting } = authUser;

    if (!status) {
      return "ManageProfileScreen";
    }

    if (!setting.skip_community) {
      return "SelectCommunityScreen";
    }

    return "TabsScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
