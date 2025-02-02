import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import codePush from "react-native-code-push";
import theme from "../../../libs/theme";

const app_id = "com.marusamaj";

Menu = props => {
  const { navigation, auth, toggleDrawer } = props;
  const { authUser } = auth;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <List style={{ paddingBottom: 5 }}>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: authUser.avatar }}
                style={{ width: 70, height: 70 }}
              />
            </Left>

            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  color: "#000",
                  fontFamily: theme.fonts.TitilliumWebSemiBold
                }}
              >
                {authUser.name}
              </Text>

              <Text
                note
                style={{
                  fontSize: 12,
                  color: "#333",
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              >
                {authUser.mobile}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  toggleDrawer({ isOpen: false });
                  navigation.push("UserDetailScreen", { guestUser: authUser });
                }}
              >
                <Text
                  note
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: "#d80402",
                    fontFamily: theme.fonts.TitilliumWebRegular
                  }}
                >
                  VIEW PROFILE
                </Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </List>
      </View>

      <View style={{ flex: 1 }}>
        <View type="account">
          <View style={{ backgroundColor: "lightblue", padding: 15 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 16,
                color: "black"
              }}
            >
              Account
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.push("SettingsScreen");
              toggleDrawer({ isOpen: false });
            }}
            style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?text=https://play.google.com/store/apps/details?id=${app_id}&rdid=${app_id}`
              )
            }
            style={{ marginTop: 15, marginBottom: 0, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Invite Friends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.push("HelpScreen");
              toggleDrawer({ isOpen: false });
            }}
            style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Help
            </Text>
          </TouchableOpacity>
        </View>

        <View type="family">
          <View style={{ backgroundColor: "lightblue", padding: 15 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 16,
                color: "black"
              }}
            >
              Family
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.push("MemberListScreen");
              toggleDrawer({ isOpen: false });
            }}
            style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              My Family
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              toggleDrawer({ isOpen: false });
              navigation.push("AddMemberScreen");
            }}
            style={{ marginTop: 0, marginBottom: 0, marginLeft: 15 }}
          >
            <Text
              style={{
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14
              }}
            >
              Add Member
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "lightblue", padding: 15 }}>
        <TouchableOpacity
          onPress={() => {
            codePush
              .sync({
                updateDialog: true,
                installMode: codePush.InstallMode.IMMEDIATE,
                deploymentKey: "N_6wYjmYnRvYSw9IDTu8cLfdK1M0HyHQrprbE"
              })
              .then(data => {
                if (data === 0) {
                  Alert.alert("Status", "Already up-to-date.");
                }
              });
          }}
        >
          <Text
            style={{
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 18,
              color: "#d80402"
            }}
          >
            v1.0.0 {""} check updates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
