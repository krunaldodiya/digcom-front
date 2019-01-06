import { Button, Text, View } from "native-base";
import React from "react";
import { TextInput } from "react-native";
import theme from "../../libs/theme";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      description: null
    };
  }

  render() {
    const { photo, name, description } = this.state;
    const { addCommunity, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: "#ccc",
                borderWidth: 1
              }}
              placeholder="Name"
              onChangeText={value => this.setState({ name: value })}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: "#ccc",
                borderWidth: 1
              }}
              placeholder="Mobile"
              onChangeText={value => this.setState({ name: value })}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: "#ccc",
                borderWidth: 1,
                height: 100,
                textAlignVertical: "top"
              }}
              placeholder="Relation"
              onChangeText={value => this.setState({ description: value })}
              multiline
            />
          </View>
        </View>

        <View style={{ marginBottom: 50, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() =>
              addCommunity({
                communityData: { photo, name, description },
                navigation
              })
            }
          >
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 14
              }}
            >
              Add Member
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ContentBody;
