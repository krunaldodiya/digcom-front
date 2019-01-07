import React from "react";
import { NetInfo } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import NoNetwork from "./src/components/NoNetwork";
// screens
import AddAccountScreen from "./src/containers/AddAccountScreen";
import GetStartedScreen from "./src/containers/GetStartedScreen";
import RequestOtpScreen from "./src/containers/RequestOtpScreen";
import VerifyOtpScreen from "./src/containers/VerifyOtpScreen";
// import AccountListScreen from "./src/containers/AccountListScreen";
// import AddCommunityScreen from "./src/containers/AddCommunityScreen";
// import AddRelationScreen from "./src/containers/AddRelationScreen";
// import AddRelativeScreen from "./src/containers/AddRelativeScreen";
// import AvatarScreen from "./src/containers/AvatarScreen";
// import ManageCommunityScreen from "./src/containers/ManageCommunityScreen";
// import ManageFamilyScreen from "./src/containers/ManageFamilyScreen";
// import ManageProfileScreen from "./src/containers/ManageProfileScreen";
// import SearchScreen from "./src/containers/SearchScreen";
// import SettingsScreen from "./src/containers/SettingsScreen";
// import TabsScreen from "./src/containers/TabsScreen";
// import UserDetailScreen from "./src/containers/UserDetailScreen";
// libs & services
import { getInitialScreen } from "./src/libs/screen";
import { getAuthMobile } from "./src/services";
import store from "./src/store";

const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      AddAccountScreen: { screen: AddAccountScreen },
      GetStartedScreen: { screen: GetStartedScreen },
      RequestOtpScreen: { screen: RequestOtpScreen },
      VerifyOtpScreen: { screen: VerifyOtpScreen },
      // TabsScreen: { screen: TabsScreen },
      // ManageProfileScreen: { screen: ManageProfileScreen },
      // ManageCommunityScreen: { screen: ManageCommunityScreen },
      // AddCommunityScreen: { screen: AddCommunityScreen },
      // AddRelationScreen: { screen: AddRelationScreen },
      // AddRelativeScreen: { screen: AddRelativeScreen },
      // ManageFamilyScreen: { screen: ManageFamilyScreen },
      // UserDetailScreen: { screen: UserDetailScreen },
      // AvatarScreen: { screen: AvatarScreen },
      // SearchScreen: { screen: SearchScreen },
      // SettingsScreen: { screen: SettingsScreen },
      // AccountListScreen: { screen: AccountListScreen },
    },
    {
      initialRouteName,
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authMobile: null,
      initialized: false
    };
  }

  componentWillMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      store.dispatch.network.networkChange({ connection: netInfo });
    });
  }

  async componentDidMount() {
    const authMobile = await getAuthMobile();

    store.dispatch.auth
      .getAuthUser()
      .then(() => {
        this.setState({ authMobile, initialized: true });
      })
      .catch(() => {
        this.setState({ authMobile, initialized: true });
      });
  }

  render() {
    const { authMobile, initialized } = this.state;

    const { auth, network } = store.getState();
    const { authUser } = auth;
    const { connection } = network;

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

    const initialRouteName = getInitialScreen(authUser, authMobile);    
    const AppNavigator = getAppNavigator(initialRouteName);
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <React.Fragment>
          {noConnection && <NoNetwork />}
          {hasConnection && initialized && <AppContainer />}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
