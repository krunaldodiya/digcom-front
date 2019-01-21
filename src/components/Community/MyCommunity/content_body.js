import { Text, Thumbnail, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    const { auth } = props;
    const { authUser } = auth;

    this.state = {
      authUser,
      agree: false
    };
  }

  render() {
    const { navigation, auth } = this.props;
    const { authUser } = auth;
    const { family_members } = authUser;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 5 }}>
          <TouchableOpacity
            style={{ padding: 5, margin: 5 }}
            onPress={() => {
              if (authUser.community) {
                navigation.push("MemberListScreen");
              } else {
                navigation.push("SelectCommunityScreen", {
                  select_community: true
                });
              }
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Thumbnail
                  circular
                  source={{
                    uri:
                      "https://cdn2.iconfinder.com/data/icons/family-18/100/22-128.png"
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontSize: 16
                  }}
                >
                  My Family
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  {family_members.length > 1
                    ? `${family_members.length} members`
                    : `${family_members.length} member`}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ padding: 5, margin: 5 }}
            onPress={() => {
              navigation.push("SearchDirectoryScreen");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Thumbnail
                  circular
                  source={{
                    uri: "https://image.flaticon.com/icons/png/128/55/55238.png"
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>

              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontSize: 16
                  }}
                >
                  Directory
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  1,540 members
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#ccc",
              paddingVertical: 10,
              paddingLeft: 15
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#000"
              }}
            >
              Categories
            </Text>
          </View>

          <View style={{ margin: 5, padding: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Thumbnail
                  circular
                  source={{
                    uri:
                      "https://cdn2.iconfinder.com/data/icons/teamwork-set-2/64/x-18-128.png"
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontSize: 16
                  }}
                >
                  Rajnikant VS CID Jokes
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  Entertainment
                </Text>
              </View>
            </View>
          </View>

          <View style={{ margin: 5, padding: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Thumbnail
                  circular
                  source={{
                    uri:
                      "https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/love-128.png"
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontSize: 16
                  }}
                >
                  Breaking News of Gujarat
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  News
                </Text>
              </View>
            </View>
          </View>

          <View style={{ margin: 5, padding: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <Thumbnail
                  circular
                  source={{
                    uri: "https://img.icons8.com/wired/2x/contract-job.png"
                  }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontSize: 16
                  }}
                >
                  Government Jobs in Gujarat
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  Jobs
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ContentBody;
