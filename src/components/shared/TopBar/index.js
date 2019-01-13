import { Body, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import styles from "./styles";

const TopBar = props => {
  const { toggleDrawer, navigation, auth } = props;
  const { authUser } = auth;

  return (
    <Header
      androidStatusBarColor="#d80402"
      hasTabs
      style={{ backgroundColor: "#d80402" }}
    >
      <Left>
        <Icon
          onPress={() => toggleDrawer({ isOpen: true })}
          type="MaterialIcons"
          name="menu"
          style={styles.icon}
        />
      </Left>
      <Body>
        <Title>IndiCom</Title>
      </Body>
      <Right>
        <Icon
          onPress={() => navigation.push("SearchScreen")}
          type="MaterialIcons"
          name="search"
          style={styles.icon}
        />
      </Right>
    </Header>
  );
};

export default TopBar;
