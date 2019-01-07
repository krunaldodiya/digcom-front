import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../Shared/Loader";
import RegisterForm from "./register_form";
import RegisterInfo from "./register_info";

class Register extends React.Component {
  render() {
    const { session } = this.props;
    const { loading } = session;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading} />
          <RegisterInfo />
          <RegisterForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Register;
