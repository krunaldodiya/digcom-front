import React from "react";
import { Text, TouchableOpacity, View, Linking } from "react-native";
import styles from "./styles";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${httpUrl}/terms`)}
            style={{ padding: 10, marginLeft: 10 }}
          >
            <Text style={styles.text}>Terms & Privacy</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => null}
            style={{ padding: 10, marginLeft: 10 }}
          >
            <Text style={styles.text}>About Us</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => null}
            style={{ padding: 10, marginLeft: 10 }}
          >
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ContentBody;
