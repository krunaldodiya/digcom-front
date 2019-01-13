import React from "react";
import { NetInfo } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import NoNetwork from "./src/components/NoNetwork";
// screens
// import AccountListScreen from "./src/containers/AccountListScreen";
import EventsScreen from "./src/containers/EventsScreen";
import FamilyListScreen from "./src/containers/FamilyListScreen";
import GetStartedScreen from "./src/containers/GetStartedScreen";
import ManageProfileScreen from "./src/containers/ManageProfileScreen";
import RequestOtpScreen from "./src/containers/RequestOtpScreen";
// import AddRelativeScreen from "./src/containers/AddRelativeScreen";
// import AvatarScreen from "./src/containers/AvatarScreen";
import SelectCommunityScreen from "./src/containers/SelectCommunityScreen";
// import SearchScreen from "./src/containers/SearchScreen";
// import SettingsScreen from "./src/containers/SettingsScreen";
import TabsScreen from "./src/containers/TabsScreen";
import VerifyOtpScreen from "./src/containers/VerifyOtpScreen";
// import UserDetailScreen from "./src/containers/UserDetailScreen";
// libs & services
import { getInitialScreen } from "./src/libs/screen";
import store from "./src/store";

const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      GetStartedScreen: { screen: GetStartedScreen },
      RequestOtpScreen: { screen: RequestOtpScreen },
      VerifyOtpScreen: { screen: VerifyOtpScreen },
      ManageProfileScreen: { screen: ManageProfileScreen },
      FamilyListScreen: { screen: FamilyListScreen },
      SelectCommunityScreen: { screen: SelectCommunityScreen },
      TabsScreen: { screen: TabsScreen },
      EventsScreen: { screen: EventsScreen }
      // AddRelativeScreen: { screen: AddRelativeScreen },
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
      initialized: false
    };
  }

  componentWillMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      store.dispatch.network.networkChange({ connection: netInfo });
    });
  }

  async componentDidMount() {
    store.dispatch.auth
      .getAuthUser()
      .then(() => {
        this.setState({ initialized: true });
      })
      .catch(() => {
        this.setState({ initialized: true });
      });
  }

  render() {
    const { initialized } = this.state;

    const { auth, network } = store.getState();
    const { authUser } = auth;
    const { connection } = network;

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

    const initialRouteName = getInitialScreen(authUser);
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
