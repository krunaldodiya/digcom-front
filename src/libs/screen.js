const getInitialScreen = (authUser) => {  
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return "ManageProfileScreen";
    }

    return "TabsScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
