import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { getContacts } from "../../../services";
import Loader from "../../Shared/Loader";
import Content from "./content";
import Header from "./header";

class ManageProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false
    };
  }

  async componentWillMount() {
    const { auth, updateUserContacts } = this.props;
    const { authUser } = auth;

    if (authUser.contacts.length === 0) {
      const contacts = await getContacts();
      updateUserContacts({ contacts });
    }
  }

  toggleKeyboardAvoidView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { loading } = this.props;
    const { avoidKeyboard } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.auth.updateAuthUser} />
          <Header {...this.props} />
          <Content
            {...this.props}
            toggleKeyboardAvoidView={this.toggleKeyboardAvoidView}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default ManageProfile;
