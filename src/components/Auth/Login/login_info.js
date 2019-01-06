import { View, Text } from "native-base";
import React from "react";
import styles from "./styles";

const LoginInfo = () => (
  <View style={styles.infoWrapper}>
    <Text style={styles.infoHeading}>LOGIN</Text>
    <Text style={styles.infoParagraph}>
      Please, Login using username & password.
    </Text>
  </View>
);

export default LoginInfo;
