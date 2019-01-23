import {
  Body,
  Button,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import theme from "../../../../libs/theme";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  renderItem = data => {
    const user = data.item;

    const { editMember, navigation, removeMember } = this.props;

    return (
      <List>
        <ListItem
          avatar
          onPress={() => {
            editMember({
              member: user,
              navigation,
              action: 'push'
            });
          }}
        >
          <Left>
            <Thumbnail
              source={{ uri: user.avatar }}
              style={{ width: 40, height: 40 }}
            />
          </Left>

          <Body>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {user.name || "No Name"}
            </Text>
            <Text
              note
              style={{
                marginTop: 1,
                fontSize: 12,
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {user.relation}
            </Text>
          </Body>

          <Right style={{ justifyContent: "center" }}>
            {user.relation !== "Self" && (
              <Button
                small
                rounded
                danger
                onPress={() => removeMember({ member_id: user.id })}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: theme.fonts.TitilliumWebRegular
                  }}
                >
                  Delete
                </Text>
              </Button>
            )}
          </Right>
        </ListItem>
      </List>
    );
  };

  render() {
    const { navigation, auth } = this.props;
    const { authUser } = auth;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={authUser.family_members}
          renderItem={data => this.renderItem(data)}
          keyExtractor={(_, index) => index.toString()}
        />

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() => navigation.push("AddMemberScreen")}
          >
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 14
              }}
            >
              Add Member
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ContentBody;
