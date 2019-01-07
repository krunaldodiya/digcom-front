import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../../components/Shared/Loader";
import RequestOtpForm from "./form";
import Info from "./info";
// styles
import styles from "./styles";

class RequestOtp extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.otp.requestOtp} />
          <Info />
          <RequestOtpForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default RequestOtp;
