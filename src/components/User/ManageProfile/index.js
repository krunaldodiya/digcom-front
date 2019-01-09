import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../Shared/Loader";
import Content from "./content";
import Header from "./header";
import Contacts from "react-native-contacts";

class ManageProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false
    };
  }

  componentWillMount() {
    Contacts.checkPermission((err, permission) => {
      if (err) throw err;

      if (permission === "undefined") {
        Contacts.requestPermission((err, permission) => {
          this.getAllContacts();
        });
      }

      if (permission === "authorized") {
        this.getAllContacts();
      }
    });
  }

  getAllContacts = () => {
    Contacts.getAllWithoutPhotos((error, contacts) => {
      console.log(contacts);
    });
  };

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
