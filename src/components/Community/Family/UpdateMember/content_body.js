import { Button, Icon, Right, Thumbnail } from "native-base";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import theme from "../../../../libs/theme";
import { uploadAvatar } from "../../../../services";
import ListModal from "../../../Shared/ListModal";
import styles from "./styles";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  componentWillUnmount() {
    this.props.editMember({ member: null });
  }

  updateData = (member, handleInput, data) => {
    handleInput({ member: { ...member, ...data } });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { modalVisible } = this.state;
    const { family, handleInput, toggleKeyboardAvoidView } = this.props;
    const { member, errors } = family;

    const options = { cropping: true, height: 480, width: 480 };

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() => {
              return uploadAvatar(options)
                .then(response => {
                  this.updateData(member, handleInput, {
                    avatar: response.remote.secure_url
                  });
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          >
            <Thumbnail
              source={{ uri: member.avatar }}
              style={{ height: 90, width: 90, borderRadius: 90 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={
              errors && errors.errors.name ? errors.errors.name[0] : "Full Name"
            }
            placeholderTextColor={
              errors && errors.errors.name ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={errors && errors.errors.name ? null : member.name}
            onChangeText={name =>
              this.updateData(member, handleInput, { name })
            }
            style={styles.input(errors && errors.errors.name)}
          />
        </View>

        <View style={styles.inputWrapper}>
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
            value={member.dob}
            onChangeText={dob => this.updateData(member, handleInput, { dob })}
            style={styles.input(errors && errors.errors.dob)}
          />
        </View>

        <View style={styles.inputWrapper}>
          {modalVisible === "marital_status" && (
            <ListModal
              {...this.props}
              data={{
                modalVisible,
                items: ["Single", "Married", "Divorcee", "widow", "widower"]
              }}
              hideModal={this.hideModal}
              onSelect={marital_status => {
                this.updateData(member, handleInput, { marital_status });
                this.hideModal();
              }}
            />
          )}

          <Button
            transparent
            style={[styles.input(null), { height: 40, borderRadius: 30 }]}
            onPress={() => this.setState({ modalVisible: "marital_status" })}
          >
            <Text
              style={{
                color: "black",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {member.marital_status}
            </Text>
            <Right>
              <Icon
                type="FontAwesome"
                name="angle-right"
                style={{ color: "gray", fontSize: 24, marginRight: 10 }}
              />
            </Right>
          </Button>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
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
              errors && errors.errors.father_city ? null : member.father_city
            }
            onChangeText={father_city => {
              this.updateData(member, handleInput, { father_city });
            }}
            style={styles.input(errors && errors.errors.father_city)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
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
              errors && errors.errors.mother_city ? null : member.mother_city
            }
            onChangeText={mother_city => {
              this.updateData(member, handleInput, { mother_city });
            }}
            style={styles.input(errors && errors.errors.mother_city)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
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
            value={errors && errors.errors.education ? null : member.education}
            onChangeText={education => {
              this.updateData(member, handleInput, { education });
            }}
            style={styles.input(errors && errors.errors.education)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={
              errors && errors.errors.occupation
                ? errors.errors.occupation[0]
                : "Occupation"
            }
            placeholderTextColor={
              errors && errors.errors.occupation ? "#e74c3c" : "#000"
            }
            autoCorrect={false}
            value={
              errors && errors.errors.occupation ? null : member.occupation
            }
            onChangeText={occupation => {
              this.updateData(member, handleInput, { occupation });
            }}
            style={styles.input(errors && errors.errors.occupation)}
          />
        </View>
      </View>
    );
  }
}

export default ContentBody;
