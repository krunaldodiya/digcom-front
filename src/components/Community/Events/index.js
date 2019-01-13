import { Text, View } from "native-base";
import React from "react";

class Events extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Text>No events published yet.</Text>
        </View>
      </View>
    );
  }
}

export default Events;
