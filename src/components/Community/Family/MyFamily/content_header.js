import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import styles from "./styles";

class ContentHeader extends React.Component {
  render() {
    const { navigation, auth } = this.props;
    const { authUser } = auth;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name={authUser ? "arrow-back" : "account-box"}
            style={styles.termsIcon}
            onPress={() => navigation.goBack()}
          />
        </Left>

        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            My Family
          </Text>
        </Body>

        <Right />
      </Header>
    );
  }
}

export default ContentHeader;
