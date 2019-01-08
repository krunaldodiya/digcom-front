const getInitialScreen = (authUser, authMobile = null) => {  
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return "AddAccountScreen";
    }

    return "TabsScreen";
  }

  if (authMobile) {
    return "AddAccountScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
