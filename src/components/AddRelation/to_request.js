import { Button, Text, View } from "native-base";
import React from "react";

class ToRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { relation, addRelation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ margin: 10 }}>
            <Button
              small
              rounded
              bordered
              success
              onPress={() =>
                addRelation({
                  type: "add",
                  from: relation.from,
                  to: relation.to
                })
              }
            >
              <Text>accept</Text>
            </Button>
          </View>

          <View style={{ margin: 10 }}>
            <Button
              small
              rounded
              bordered
              danger
              onPress={() =>
                addRelation({
                  type: "remove",
                  from: relation.from,
                  to: relation.to
                })
              }
            >
              <Text>decline</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default ToRequest;
