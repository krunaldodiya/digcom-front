import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Segment,
  Text
} from "native-base";
import React from "react";
import theme from "../../libs/theme";
import styles from "./styles";

getRelationStatus = (authUser, guestUser) => {
  const { relatives } = authUser;

  if (!relatives.length) {
    return "person-add";
  }

  if (relatives.length) {
    const relations = relatives.filter(data => guestUser.id === data.from);

    if (relations.length) {
      const relation = relations[0];

      return relation.status ? "verified-user" : "access-alarms";
    }

    return "person-add";
  }
};

const ContentHeader = props => {
  const { auth, navigation, segment, toggleSegment, guestUser } = props;
  const { authUser } = auth;

  const status = getRelationStatus(authUser, guestUser);

  return (
    <Header
      style={styles.termsWrapper}
      androidStatusBarColor="#d80402"
      hasSegment
    >
      <Left>
        <Icon
          type="MaterialIcons"
          name="arrow-back"
          style={styles.termsIcon}
          onPress={() => props.navigation.goBack()}
        />
      </Left>

      <Body>
        <Segment style={styles.termsHeader}>
          <Button
            first
            active={segment === "profile"}
            onPress={() => toggleSegment("profile")}
          >
            <Text
              style={{
                fontFamily:
                  segment === "profile"
                    ? theme.fonts.TitilliumWebSemiBold
                    : theme.fonts.TitilliumWebRegular
              }}
            >
              Profile
            </Text>
          </Button>
          <Button
            last
            active={segment === "family"}
            onPress={() => toggleSegment("family")}
          >
            <Text
              style={{
                fontFamily:
                  segment === "family"
                    ? theme.fonts.TitilliumWebSemiBold
                    : theme.fonts.TitilliumWebRegular
              }}
            >
              Family
            </Text>
          </Button>
        </Segment>
      </Body>

      <Right>
        {authUser.id === guestUser.id && (
          <Icon
            type="MaterialIcons"
            name="edit"
            style={styles.termsIcon}
            onPress={() => navigation.replace("ManageProfileScreen")}
          />
        )}

        {authUser.id !== guestUser.id && (
          <Icon
            type="MaterialIcons"
            name={status}
            style={styles.termsIcon}
            onPress={() => navigation.push("AddRelationScreen", { guestUser })}
          />
        )}
      </Right>
    </Header>
  );
};

export default ContentHeader;
