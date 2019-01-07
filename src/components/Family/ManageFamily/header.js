import { Text, View } from "native-base";
import React from "react";
import styles from "./styles";

const TermsHeader = props => {
  return (
    <View style={styles.termsWrapper}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.termsHeader}>Add Family Member</Text>
      </View>
    </View>
  );
};

export default TermsHeader;
