import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import theme from "../../../libs/theme";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  render() {
    const { session, navigation } = this.props;
    const { errors } = session;
    const { username } = this.state;

    return (
      <React.Fragment>
        <Form style={styles.formWrapper}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.username
                  ? errors.errors.username[0]
                  : "Username"
              }
              placeholderTextColor={
                errors && errors.errors.username ? "#e74c3c" : "gray"
              }
              autoCorrect={false}
              value={errors && errors.errors.username ? null : username}
              onChangeText={number => this.setState({ username: number })}
              style={styles.input(errors && errors.errors.username)}
            />
          </Item>

          <Item style={[styles.submitButtonWrapper, { marginTop: 20 }]}>
            <Button
              rounded
              small
              disabled={username.length !== 10}
              style={styles.submitButton}
              onPress={() => console.log("send otp")}
            >
              <Text style={styles.submitButtonText}>Send Otp</Text>
            </Button>
          </Item>
        </Form>

        <View style={{ padding: 15 }}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                color: "#333",
                fontSize: 16,
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              forgot username ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 15, backgroundColor: "#7EF9FF" }}>
          <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
            <Text
              style={{
                textAlign: "center",
                color: "#000",
                fontSize: 18,
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

export default LoginForm;
