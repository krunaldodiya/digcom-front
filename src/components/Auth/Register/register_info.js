import { View, Text } from "native-base";
import React from "react";
import styles from "./styles";

const RegisterInfo = () => (
  <View style={styles.infoWrapper}>
    <Text style={styles.infoHeading}>REGISTER</Text>
    <Text style={styles.infoParagraph}>
      Please, Provide mobile number to recover password in future.
    </Text>
  </View>
);

export default RegisterInfo;
