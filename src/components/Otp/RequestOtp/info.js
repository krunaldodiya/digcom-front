import { View, Text } from "native-base";
import React from "react";
import styles from "./styles";

const Info = () => (
  <View style={styles.infoWrapper}>
    <Text style={styles.infoHeading}>REQUEST OTP</Text>
    <Text style={styles.infoParagraph}>
      Please, Enter your mobile to receive verification code
    </Text>
  </View>
);

export default Info;
