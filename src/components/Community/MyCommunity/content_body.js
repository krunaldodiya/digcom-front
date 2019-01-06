import { Button, Text, View } from "native-base";
import React from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import theme from "../../libs/theme";
import { uploadAvatar } from "../../services";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo:
        "http://www.myiconfinder.com/uploads/iconsets/256-256-8dfc2ee8698fd8d109cb77a23c145966.png",
      name: null,
      description: null
    };
  }

  render() {
    const { photo, name, description } = this.state;
    const { addCommunity, navigation } = this.props;

    const options = { cropping: true, height: 480, width: 480 };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <TouchableOpacity
            style={{
              marginBottom: 30,
              alignItems: "center"
            }}
            onPress={() => {
              return uploadAvatar(options)
                .then(response => {
                  this.setState({ photo: response.remote.secure_url });
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          >
            <Image
              loadingIndicatorSource={require("../../../assets/images/loading.gif")}
              source={{ uri: photo }}
              style={{
                marginBottom: 20,
                height: 120,
                width: 120
              }}
            />

            <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>
              UPLOAD PHOTO
            </Text>
          </TouchableOpacity>

          <View style={{ marginBottom: 10 }}>
            <TextInput
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderColor: "#ccc",
                borderWidth: 1
              }}
              placeholder="community name"
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
              placeholder="community description"
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
              Add Community
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ContentBody;
