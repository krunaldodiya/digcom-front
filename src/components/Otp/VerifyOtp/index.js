import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../../components/Shared/Loader";
import VerifyOtpForm from "./form";
import Info from "./info";
import styles from "./styles";
import Timer from "./timer";

class VerifyOtp extends React.Component {
  render() {
    const { otp, navigation, loading } = this.props;
    const { mobile } = otp;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.otp.verifyOtp} />
          <Info mobile={mobile} />
          <Timer navigation={navigation} />
          <VerifyOtpForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default VerifyOtp;
