import { View, Text } from "native-base";
import React from "react";
import styles from "./styles";

const LoginInfo = () => (
  <View style={styles.infoWrapper}>
    <Text style={styles.infoHeading}>RESET PASSWORD</Text>
    <Text style={styles.infoParagraph}>
      Please, Enter username or mobile to get detail via otp.
    </Text>
  </View>
);

export default LoginInfo;
