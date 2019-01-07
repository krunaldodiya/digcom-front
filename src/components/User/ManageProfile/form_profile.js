import { Form, Input, Item, View } from "native-base";
import React from "react";
import { TextInputMask } from "react-native-masked-text";
import Switch from "../Shared/Switch";
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

    return (
      <Form style={styles.formWrapper}>
        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={
              errors && errors.errors.name ? errors.errors.name[0] : "Full Name"
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
              errors && errors.errors.dob ? errors.errors.dob[0] : "25-08-1990"
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

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={
              errors && errors.errors.education
                ? errors.errors.education[0]
                : "Education"
            }
            placeholderTextColor={
              errors && errors.errors.education ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={
              errors && errors.errors.education ? null : authUser.education
            }
            onChangeText={education => this.updateData({ education })}
            style={styles.input(errors && errors.errors.education)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => toggleKeyboardAvoidView(true)}
            placeholder={
              errors && errors.errors.occupation
                ? errors.errors.occupation[0]
                : "Job / Business"
            }
            placeholderTextColor={
              errors && errors.errors.occupation ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={
              errors && errors.errors.occupation ? null : authUser.occupation
            }
            onChangeText={occupation => this.updateData({ occupation })}
            style={styles.input(errors && errors.errors.occupation)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => toggleKeyboardAvoidView(true)}
            placeholder={
              errors && errors.errors.father_city
                ? errors.errors.father_city[0]
                : "Father City"
            }
            placeholderTextColor={
              errors && errors.errors.father_city ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={
              errors && errors.errors.father_city ? null : authUser.father_city
            }
            onChangeText={father_city => this.updateData({ father_city })}
            style={styles.input(errors && errors.errors.father_city)}
          />
        </Item>

        <Item style={styles.inputWrapper}>
          <Input
            onFocus={() => toggleKeyboardAvoidView(true)}
            placeholder={
              errors && errors.errors.mother_city
                ? errors.errors.mother_city[0]
                : "Mother City"
            }
            placeholderTextColor={
              errors && errors.errors.mother_city ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={
              errors && errors.errors.mother_city ? null : authUser.mother_city
            }
            onChangeText={mother_city => this.updateData({ mother_city })}
            style={styles.input(errors && errors.errors.mother_city)}
          />
        </Item>

        <View style={styles.buttonGroup}>
          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={250}
              options={["Male", "Female"]}
              selected={authUser.gender}
              onChange={gender => this.updateData({ gender })}
            />
          </Item>

          <Item style={styles.buttonWrapper}>
            <Switch
              {...this.props}
              width={250}
              options={["Married", "Single", "Divorcee"]}
              selected={authUser.marital_status}
              onChange={marital_status => this.updateData({ marital_status })}
            />
          </Item>
        </View>
      </Form>
    );
  }
}

export default ProfileForm;
