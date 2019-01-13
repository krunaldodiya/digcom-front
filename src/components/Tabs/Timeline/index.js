import { Text, View } from "native-base";
import React from "react";

class Timeline extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Text>gallery / likes / comments</Text>
        </View>
      </View>
    );
  }
}

export default Timeline;
