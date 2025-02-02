import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../../Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class UpdateMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false
    };
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
          <Loader loading={loading.models.family} />
          <ContentHeader {...this.props} />
          <ContentBody
            {...this.props}
            toggleKeyboardAvoidView={this.toggleKeyboardAvoidView}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default UpdateMember;
