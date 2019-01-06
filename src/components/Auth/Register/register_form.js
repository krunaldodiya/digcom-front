import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";
import styles from "./styles";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: null,
      username: null,
      password: null
    };
  }

  render() {
    const { session, navigation, register } = this.props;
    const { loading, errors } = session;
    const { mobile, username, password } = this.state;

    return (
      <React.Fragment>
        <Form style={styles.formWrapper}>
          <Item style={styles.inputWrapper}>
            <Input
              placeholder={
                errors && errors.errors.mobile
                  ? errors.errors.mobile[0]
                  : "Mobile Number"
              }
              placeholderTextColor={
                errors && errors.errors.mobile ? "#e74c3c" : "gray"
              }
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={10}
              value={errors && errors.errors.mobile ? null : mobile}
              onChangeText={number => this.setState({ mobile: number })}
              style={styles.input(errors && errors.errors.mobile)}
            />
          </Item>

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

          <Item style={styles.inputWrapper}>
            <Input
              secureTextEntry
              placeholder={
                errors && errors.errors.password
                  ? errors.errors.password[0]
                  : "Password"
              }
              placeholderTextColor={
                errors && errors.errors.password ? "#e74c3c" : "gray"
              }
              autoCorrect={false}
              value={errors && errors.errors.password ? null : password}
              onChangeText={number => this.setState({ password: number })}
              style={styles.input(errors && errors.errors.password)}
            />
          </Item>

          <Item style={[styles.submitButtonWrapper, { marginTop: 20 }]}>
            <Button
              rounded
              small
              disabled={loading}
              style={styles.submitButton}
              onPress={() =>
                register({ mobile, username, password, navigation })
              }
            >
              <Text style={styles.submitButtonText}>REGISTER</Text>
            </Button>
          </Item>
        </Form>

        <View style={{ padding: 15, backgroundColor: "#7EF9FF" }}>
          <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
            <Text
              style={{
                textAlign: "center",
                color: "black",
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

export default RegisterForm;
