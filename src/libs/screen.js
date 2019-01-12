const getInitialScreen = authUser => {
  if (authUser) {
    const { status, community } = authUser;

    if (!status) {
      return "ManageProfileScreen";
    }

    if (!community) {
      return "ManageCommunityScreen";
    }

    return "AddFamilyScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
