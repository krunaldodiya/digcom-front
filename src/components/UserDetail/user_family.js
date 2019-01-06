import { Body, Left, List, ListItem, Text, Thumbnail, View } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import theme from "../../libs/theme";

class UserFamily extends React.Component {
  renderItem = (data, navigation) => {
    const { item } = data;

    return (
      <List>
        <ListItem
          avatar
          onPress={() =>
            navigation.push("UserDetailScreen", { guestUser: item.user })
          }
        >
          <Left>
            <Thumbnail
              source={{ uri: item.user.avatar }}
              style={{ width: 65, height: 65 }}
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
              {item.user.name}
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
              {item.user.age} {item.user.gender}, {item.user.marital_status}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 12,
                color: "indigo",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {item.to_relation}
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  };

  render() {
    const { navigation, guestUser } = this.props;
    const { relatives } = guestUser;

    const activeRelatives = relatives.filter(
      relative => relative.status == true
    );

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={activeRelatives}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => this.renderItem(data, navigation)}
        />
      </View>
    );
  }
}

export default UserFamily;
