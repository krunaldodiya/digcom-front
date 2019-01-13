import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

class Header extends React.Component {
  render() {
    const { family, addMember, navigation } = this.props;
    const { authUser } = family;

    return (
      <View style={styles.termsWrapper}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.termsHeader}>Add Family</Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            addMember({
              authUser,
              navigation
            })
          }
        >
          <Text style={styles.submitButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
