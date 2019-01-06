import { Body, Header, Icon, Left, Right, Text } from "native-base";
import React from "react";
import { getInitialScreen } from "../../libs/screen";
import { getAuthMobile } from "../../services/auth";
import styles from "./styles";

class ContentHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authMobile: null
    };
  }

  async componentDidMount() {
    const authMobile = await getAuthMobile();

    this.setState({ authMobile });
  }

  render() {
    const { authMobile } = this.state;
    const { navigation, auth } = this.props;
    const { authUser } = auth;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            style={styles.termsIcon}
            onPress={() =>
              navigation.replace(getInitialScreen(authUser, authMobile))
            }
          />
        </Left>
        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            Select Community
          </Text>
        </Body>
        <Right />>
      </Header>
    );
  }
}

export default ContentHeader;
