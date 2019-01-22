import {
  Body,
  Button,
  Left,
  List,
  ListItem,
  Right,
  Spinner,
  Text,
  Thumbnail,
  View
} from "native-base";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import theme from "../../../../libs/theme";

import { httpUrl } from "../../../../libs/vars";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: "",
      relations: []
    };
  }

  componentDidMount() {
    const relations = require("./relations.json");

    this.setState({ relations });
  }

  renderItem = data => {
    const { navigation } = this.props;

    const relation = data.item;
    const photo =
      relation.gender == "Male"
        ? `${httpUrl}/images/man.png`
        : `${httpUrl}/images/woman.png`;

    return (
      <List style={{ backgroundColor: "white" }}>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{ uri: photo }}
              style={{ width: 50, height: 50 }}
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
              {relation.relation}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 12,
                color: "#000",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              {relation.gender}
            </Text>
          </Body>

          <Right style={{ justifyContent: "center" }}>
            <Button
              small
              rounded
              bordered
              onPress={() => {
                selectCommunity({ navigation, relation });
              }}
            >
              <Text style={{ fontSize: 10 }}>select</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    );
  };

  showLoader = () => {
    return (
      <View style={{ flex: 1 }}>
        <Spinner size="small" color="black" />
      </View>
    );
  };

  render() {
    const { relations } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={relations}
          renderItem={data => this.renderItem(data)}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}

export default ContentBody;
