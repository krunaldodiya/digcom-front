import { Button, Form, Input, Item, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import theme from "../../../libs/theme";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: ""
    };
  }

  render() {
    const { guest, navigation } = this.props;
    const { errors } = guest;
    const { mobile } = this.state;

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

          <Item style={[styles.submitButtonWrapper, { marginTop: 20 }]}>
            <Button
              rounded
              small
              disabled={mobile.length !== 10}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>SEARCH</Text>
            </Button>
          </Item>
        </Form>

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
