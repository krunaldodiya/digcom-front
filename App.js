import React from "react";
import { NetInfo } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
// components
import NoNetwork from "./src/components/NoNetwork";
// screens
import AddMemberScreen from "./src/containers/AddMemberScreen";
import EventsScreen from "./src/containers/EventsScreen";
import FilterDirectoryScreen from "./src/containers/FilterDirectoryScreen";
import GetStartedScreen from "./src/containers/GetStartedScreen";
import HelpScreen from "./src/containers/HelpScreen";
import ManageProfileScreen from "./src/containers/ManageProfileScreen";
import MemberListScreen from "./src/containers/MemberListScreen";
import MyCommunityScreen from "./src/containers/MyCommunityScreen";
import RequestOtpScreen from "./src/containers/RequestOtpScreen";
import SearchDirectoryScreen from "./src/containers/SearchDirectoryScreen";
import SelectCommunityScreen from "./src/containers/SelectCommunityScreen";
import TabsScreen from "./src/containers/TabsScreen";
import UpdateMemberScreen from "./src/containers/UpdateMemberScreen";
import VerifyOtpScreen from "./src/containers/VerifyOtpScreen";
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
      MemberListScreen: { screen: MemberListScreen },
      SelectCommunityScreen: { screen: SelectCommunityScreen },
      TabsScreen: { screen: TabsScreen },
      EventsScreen: { screen: EventsScreen },
      MyCommunityScreen: { screen: MyCommunityScreen },
      SearchDirectoryScreen: { screen: SearchDirectoryScreen },
      FilterDirectoryScreen: { screen: FilterDirectoryScreen },
      AddMemberScreen: { screen: AddMemberScreen },
      UpdateMemberScreen: { screen: UpdateMemberScreen },
      HelpScreen: { screen: HelpScreen }
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
