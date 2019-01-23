import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

class ContentHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { family, updateMember, navigation } = this.props;
    const { member } = family;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            style={styles.termsIcon}
            onPress={() => navigation.goBack()}
          />
        </Left>
        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            Update ({member.relation})
          </Text>
        </Body>
        <Right>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              updateMember({
                member,
                navigation
              })
            }
          >
            <Text style={styles.submitButtonText}>UPDATE</Text>
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

export default ContentHeader;
