import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

class Header extends React.Component {
  render() {
    const { guest, register, navigation } = this.props;
    const { authUser } = guest;

    return (
      <View style={styles.termsWrapper}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.termsHeader}>Add Family</Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            register({
              authUser,
              navigation
            })
          }
        >
          <Text style={styles.submitButtonText}>FINISH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
