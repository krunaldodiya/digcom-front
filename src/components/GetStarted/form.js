import { Button, CheckBox, Form, Item, Text } from "native-base";
import React from "react";
import styles from "./styles";

class TermsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agree: false
    };
  }

  toggleTermsAgreement = () => {
    const { agree } = this.state;

    this.setState({ agree: !agree });
  };

  render() {
    const { navigation } = this.props;
    const { agree } = this.state;

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.agreeWrapper}>
          <CheckBox
            checked={agree ? true : false}
            onPress={() => this.toggleTermsAgreement()}
            style={styles.checkBox(agree)}
          />

          <Text style={styles.agreeText}>
            I have read all the terms & conditions.
          </Text>
        </Item>

        <Item style={styles.submitButtonWrapper}>
          <Button
            rounded
            small
            disabled={!agree}
            style={agree ? styles.submitButton : styles.submitButtonDisabled}
            onPress={() => navigation.replace("RequestOtpScreen")}
          >
            <Text
              style={
                agree
                  ? styles.submitButtonText
                  : styles.submitButtonTextDisabled
              }
            >
              Agree & Continue
            </Text>
          </Button>
        </Item>
      </Form>
    );
  }
}

export default TermsForm;
