const getInitialScreen = (authUser) => {  
  if (authUser) {
    const { status } = authUser;

    if (!status) {
      return "ManageProfileScreen";
    }

    return "AddFamilyScreen";
  }

  return "GetStartedScreen";
};

export { getInitialScreen };
