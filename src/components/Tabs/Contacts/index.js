import { Text, View } from "native-base";
import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Text>No channels subscribed yet.</Text>
        </View>
      </View>
    );
  }
}

export default Contacts;
