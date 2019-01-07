import { Button, Form, Input, Item, Text } from "native-base";
import React from "react";
import styles from "./styles";

const RequestOtpForm = props => {
  const { otp, navigation, requestOtp, handleInput } = props;
  const { mobile, errors } = otp;

  return (
    <Form style={styles.formWrapper}>
      <Item style={styles.inputWrapper}>
        <Input
          placeholder={errors ? errors.errors.mobile[0] : "9876543210"}
          placeholderTextColor={errors ? "#e74c3c" : "#000"}
          keyboardType="number-pad"
          maxLength={10}
          value={mobile}
          onChangeText={number => handleInput({ mobile: number })}
          style={styles.input(errors)}
        />
      </Item>

      <Item style={styles.submitButtonWrapper}>
        <Button
          rounded
          small
          disabled={mobile.length !== 10}
          style={styles.submitButton}
          onPress={() => {
            return requestOtp({ mobile, navigation });
          }}
        >
          <Text style={styles.submitButtonText}>SEND OTP</Text>
        </Button>
      </Item>
    </Form>
  );
};

export default RequestOtpForm;
