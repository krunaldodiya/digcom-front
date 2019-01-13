import { Body, Header, Icon, Left, Right, Text, Button } from "native-base";
import React from "react";
import styles from "./styles";

class ContentHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  render() {
    const { navigation, skipCommunity, select_community } = this.props;

    return (
      <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
        <Left>
          <Icon
            type="MaterialIcons"
            name="group"
            style={styles.termsIcon}
            onPress={() => null}
          />
        </Left>
        <Body>
          <Text numberOfLines={1} style={styles.termsHeader}>
            Select Community
          </Text>
        </Body>
        <Right>
          <Button
            small
            transparent
            onPress={() => {
              return skipCommunity({ navigation, select_community });
            }}
          >
            <Text style={{ color: "white" }}>
              {select_community ? "cancel" : "skip"}
            </Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default ContentHeader;
