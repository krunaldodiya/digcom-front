import { Button, Icon, Right, Thumbnail } from "native-base";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import theme from "../../../libs/theme";
import { httpUrl } from "../../../libs/vars";
import { uploadAvatar } from "../../../services";
import Switch from "../../Shared/Switch";
import RelationModal from "./relation";
import styles from "./styles";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  componentWillMount() {
    const { authUser, navigation } = this.props;
    const { state } = navigation;

    const user_relation = state.params ? state.params.relation : "self";

    this.props.handleInput({
      authUser: {
        name: null,
        dob: null,
        gender: "Male",
        marital_status: "Single",
        avatar: `${httpUrl}/images/man.png`,
        relation: user_relation,
        relation_title: user_relation === "self" ? "you" : null,
        ...authUser
      }
    });
  }

  updateData = data => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({ authUser: { ...authUser, ...data } });
  };

  onSelect = relation_title => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({
      authUser: { ...authUser, relation_title }
    });

    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { modalVisible } = this.state;
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { authUser, errors } = auth;

    const options = { cropping: true, height: 480, width: 480 };

    if (!authUser) {
      return false;
    }

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
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
          >
            <Thumbnail
              source={{ uri: authUser.avatar }}
              style={{ height: 90, width: 90, borderRadius: 90 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 30, marginBottom: 10 }}>
          <Switch
            {...this.props}
            width={250}
            options={["Male", "Female"]}
            selected={authUser.gender}
            onChange={gender => this.updateData({ gender })}
          />
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
            value={errors && errors.errors.name ? null : authUser.name}
            onChangeText={name => this.updateData({ name })}
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
            value={authUser.dob}
            onChangeText={dob => this.updateData({ dob })}
            style={styles.input(errors && errors.errors.dob)}
          />
        </View>

        {authUser.relation === "family" && (
          <View style={styles.inputWrapper}>
            <RelationModal
              gender={authUser.gender}
              modalVisible={modalVisible}
              onSelect={this.onSelect}
            />

            <Button
              transparent
              style={styles.input(null)}
              onPress={() => this.setState({ modalVisible: true })}
            >
              <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>
                {authUser.relation_title || "Select a relation"}
              </Text>

              <Right>
                <Icon
                  type="FontAwesome"
                  name="angle-right"
                  style={{ fontSize: 24, color: "gray", marginRight: 8 }}
                />
              </Right>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

export default Content;
