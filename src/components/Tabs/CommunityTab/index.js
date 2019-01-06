import { Text, Thumbnail, View } from "native-base";
import React from "react";
import theme from "../../../libs/theme";

class CommunityTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            margin: 5,
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc"
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 16,
                color: "#000"
              }}
            >
              Upcoming Birthday
            </Text>
          </View>

          <View style={{ margin: 5, padding: 5 }}>
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
                  Krunal Dodiya
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  27 June
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ margin: 5, padding: 5 }}>
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
                  Directory
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  4,250 members
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
                  Matrimony
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  250 subscribers
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
                  Jobs
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  250 vacancies
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ margin: 5, padding: 5 }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 16,
                color: "#000"
              }}
            >
              Channels
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
                  Meetings
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  All Vankar
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
                  Bhandaro
                </Text>

                <Text
                  style={{
                    marginTop: 2,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14
                  }}
                >
                  2284 Vankar Samaj
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
