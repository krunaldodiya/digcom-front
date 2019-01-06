import { Button, CheckBox, Switch, Text, View } from "native-base";
import React from "react";
import { KeyboardAvoidingView, SafeAreaView, TextInput } from "react-native";
import Loader from "../../components/shared/Loader";
import { api } from "../../libs/api";
import theme from "../../libs/theme";
import styles from "./styles";

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
    const { updateSettings, auth, deleteAccount, navigation } = this.props;
    const { loading } = auth;
    const { authUser, agree } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading} />

          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "#d80402"
                }}
              >
                SHOW MOBILE
              </Text>
              <Switch
                value={authUser.setting.show_mobile ? true : false}
                onValueChange={value => {
                  const setting = { ...authUser.setting, show_mobile: value };
                  const user = { ...authUser, setting };

                  this.setState({ authUser: user });
                  updateSettings({ authUser: user, url: api.setMobileStatus });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontSize: 14,
                  color: "#d80402"
                }}
              >
                SHOW BIRTHDAY
              </Text>
              <Switch
                value={authUser.setting.show_birthday ? true : false}
                onValueChange={value => {
                  const setting = { ...authUser.setting, show_birthday: value };
                  const user = { ...authUser, setting };

                  this.setState({ authUser: user });
                  updateSettings({
                    authUser: user,
                    url: api.setBirthdayStatus
                  });
                }}
              />
            </View>
          </View>

          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              PRIMARY MOBILE
            </Text>

            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 16,
                    color: "#000"
                  }}
                >
                  {authUser.mobile}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#d80402"
            }}
          >
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              SECONDARY MOBILE
            </Text>

            <View style={{ marginTop: 20 }}>
              <TextInput
                placeholder="Secondary Mobile"
                placeholderTextColor="#000"
                keyboardType="number-pad"
                maxLength={10}
                value={authUser.secondary_mobile}
                onChangeText={value => {
                  this.setState({
                    authUser: { ...authUser, secondary_mobile: value }
                  });
                }}
                style={{
                  color: "black",
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 30,
                  paddingVertical: 5,
                  paddingLeft: 15,
                  fontFamily: theme.fonts.TitilliumWebRegular
                }}
              />
            </View>

            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <Button
                small
                danger
                rounded
                onPress={() => {
                  updateSettings({ authUser, url: api.updateSecondaryMobile });
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14,
                    color: "white"
                  }}
                >
                  UPDATE
                </Text>
              </Button>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 14,
                color: "#d80402"
              }}
            >
              DELETE ACCOUNT
            </Text>

            <View style={styles.agreeWrapper}>
              <CheckBox
                checked={agree ? true : false}
                onPress={() => this.setState({ agree: !agree })}
                style={styles.checkBox(agree)}
              />

              <Text style={styles.agreeText}>I verify to delete</Text>
            </View>

            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <Button
                small
                danger
                rounded
                disabled={!agree}
                onPress={() => deleteAccount({ navigation })}
              >
                <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>
                  DELETE ACCOUNT
                </Text>
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default ContentBody;
