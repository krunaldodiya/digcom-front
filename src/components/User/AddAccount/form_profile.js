import { Form, Input, Item, Text, Thumbnail, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import theme from "../../../libs/theme";
import { uploadAvatar } from "../../../services";
import Switch from "../../Shared/Switch";
import styles from "./styles";

class ProfileForm extends React.Component {
  updateData = data => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({ authUser: { ...authUser, ...data } });
  };

  render() {
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { authUser, errors } = auth;
    const options = { cropping: true, height: 480, width: 480 };

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <TouchableOpacity
            onPress={() => {
              return uploadAvatar(options)
                .then(response => {
                  this.updateData({ avatar: response.remote.secure_url });
                })
                .catch(error => {
                  console.log(error);
                });
            }}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              justifyContent: "space-between",
              padding: 5,
              marginRight: 5
            }}
          >
            <Thumbnail circular source={{ uri: authUser.avatar }} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "gray",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              Choose Relation
            </Text>
          </View>
        </View>

        <Form style={styles.formWrapper}>
          <Item style={styles.inputWrapper}>
            <Input
              onFocus={() => toggleKeyboardAvoidView(false)}
              placeholder={
                errors && errors.errors.name
                  ? errors.errors.name[0]
                  : "Full Name"
              }
              placeholderTextColor={
                errors && errors.errors.name ? "#e74c3c" : "#000"
              }
              autoCorrect={false}
              value={errors && errors.errors.name ? null : authUser.name}
              onChangeText={name => this.updateData({ name })}
              style={styles.input(errors && errors.errors.name)}
            />
          </Item>

          <Item style={styles.inputWrapper}>
            <TextInputMask
              onFocus={() => toggleKeyboardAvoidView(false)}
              refInput={ref => (this.myDateText = ref)}
              type={"datetime"}
              options={{ format: "DD-MM-YYYY" }}
              placeholder={
                errors && errors.errors.dob
                  ? errors.errors.dob[0]
                  : "25-08-1990"
              }
              placeholderTextColor={errors ? "#e74c3c" : "#000"}
              autoCorrect={false}
              value={authUser.dob}
              onChangeText={dob => this.updateData({ dob })}
              style={[
                styles.input(errors && errors.errors.dob),
                { width: "88%", fontSize: 17 }
              ]}
            />
          </Item>

          <View style={styles.buttonGroup}>
            <Item style={styles.buttonWrapper}>
              <Switch
                {...this.props}
                width={250}
                options={["Male", "Female"]}
                selected="Male"
                onChange={gender => this.updateData({ gender })}
              />
            </Item>

            <Item style={styles.buttonWrapper}>
              <Switch
                {...this.props}
                width={250}
                options={["Married", "Single", "Divorcee"]}
                selected="Single"
                onChange={marital_status => this.updateData({ marital_status })}
              />
            </Item>
          </View>
        </Form>
      </View>
    );
  }
}

export default ProfileForm;
