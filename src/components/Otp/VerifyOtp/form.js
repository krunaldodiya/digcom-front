import { Button, Form, Item, Text } from "native-base";
import React from "react";
import { Alert } from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import styles from "./styles";

class VerifyOtpForm extends React.Component {
  checkOtp = isValid => {
    this.props.setOtp({ otpVerified: isValid });
  };

  checkVerification = () => {
    const { otp, verifyOtp, navigation } = this.props;
    const { mobile, serverOtp, otpVerified } = otp;

    if (otpVerified) {
      return verifyOtp({ mobile, otp: serverOtp, navigation });
    }

    return Alert.alert("Oops!", "Invalid OTP");
  };

  render() {
    const { otp } = this.props;
    const { serverOtp, clientOtp, otpVerified } = otp;

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <CodeInput
            activeColor="black"
            inactiveColor="gray"
            ref={clientOtp}
            keyboardType="numeric"
            className="border-b"
            compareWithCode={serverOtp.toString()}
            codeLength={4}
            space={5}
            size={50}
            autoFocus
            inputPosition="center"
            codeInputStyle={{ fontSize: 30, borderColor: "black" }}
            onFulfill={isValid => this.checkOtp(isValid)}
          />
        </Item>

        <Item style={styles.submitButtonWrapper}>
          <Button
            rounded
            small
            disabled={!otpVerified}
            style={styles.submitButton}
            onPress={() => this.checkVerification()}
          >
            <Text style={styles.submitButtonText}>VERIFY OTP</Text>
          </Button>
        </Item>
      </Form>
    );
  }
}

export default VerifyOtpForm;
