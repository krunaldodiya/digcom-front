import { Body, Button, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
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

    const { login, navigation, auth } = this.props;
    const { authUser } = auth;

    return (
      <List
        style={{
          backgroundColor:
            authUser && authUser.id === user.id ? "#eee" : "white"
        }}
      >
        <ListItem
          avatar
          onPress={() => {
            login({
              authUser,
              member: user,
              navigation
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
              {user.name}
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
              {user.age} {user.gender}, {user.marital_status}
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  };

  render() {
    const { loading, users } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {!users.length && (
            <View style={{ padding: 20 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontSize: 16
                }}
              >
                {loading ? "Loading, please wait..." : "No Accounts"}
              </Text>
            </View>
          )}

          <FlatList
            data={users}
            renderItem={data => this.renderItem(data)}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <View style={{ margin: 20, alignSelf: "center" }}>
          <Button
            small
            danger
            onPress={() => null}
          >
            <Text
              style={{
                color: "white",
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                fontSize: 14
              }}
            >
              Add Account
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default ContentBody;
