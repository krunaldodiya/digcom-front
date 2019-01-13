import { Text, Thumbnail, View } from "native-base";
import React from "react";
import theme from "../../../libs/theme";

class CommunityTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "center" }}>
              <Thumbnail
                circular
                source={{
                  uri:
                    "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
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
                Vankar Community
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14
                }}
              >
                1,750 members
              </Text>
            </View>
          </View>
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
              Top Groups
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
              My Groups
            </Text>
          </View>

          <View style={{ margin: 5, padding: 5 }}>
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
                  Stock Market News
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
                  Gujarat - Election Commission 2019
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  Politics
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default CommunityTab;
