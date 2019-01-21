import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import styles from "./styles";

class ContentHeader extends React.Component {
  render() {
    const { navigation } = this.props;

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
            Directory
          </Text>
        </Body>

        <Right>
          <Icon
            type="MaterialIcons"
            name="filter-list"
            style={styles.termsIcon}
            onPress={() => navigation.push("FilterDirectoryScreen")}
          />
        </Right>
      </Header>
    );
  }
}

export default ContentHeader;