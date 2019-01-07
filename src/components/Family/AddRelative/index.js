import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../components/Shared/Loader";
import ContentBody from "./content_body";
import ContentHeader from "./content_header";

class AddRelative extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.models.communities} />
          <ContentHeader {...this.props} />
          <ContentBody {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default AddRelative;
