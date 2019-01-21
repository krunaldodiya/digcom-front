import {
  Body,
  Button,
  Form,
  Icon,
  Input,
  Item,
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

class ContentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ""
    };
  }

  componentDidMount() {
    this.props.getCommunities();
  }

  get selectedCommunity() {
    const { communities } = this.props;
    const { keywords } = this.state;

    if (keywords.length < 2) {
      return communities.data;
    }

    const regex = new RegExp(keywords, "gi");

    const filteredCommunities = communities.data.filter(community => {
      return community.name.match(regex);
    });

    return filteredCommunities;
  }

  renderItem = data => {
    const community = data.item;
    const {
      navigation,
      loading,
      selectCommunity,
      select_community
    } = this.props;

    if (loading.models.communities) {
      return false;
    }

    return (
      <List style={{ backgroundColor: "white" }}>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{ uri: community.photo }}
              style={{ width: 60, height: 60 }}
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
              {community.name}
            </Text>
            <Text
              note
              style={{
                fontSize: 12,
                color: "#333",
                fontFamily: theme.fonts.TitilliumWebRegular
              }}
            >
              ({community.members_count}) members
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
              {community.religion}
            </Text>
          </Body>

          <Right style={{ justifyContent: "center" }}>
            <Button
              small
              rounded
              bordered
              onPress={() => {
                selectCommunity({ navigation, community, select_community });
              }}
            >
              <Text style={{ fontSize: 12 }}>select</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    );
  };

  renderHeader = () => {
    const { loading } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Form>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={keywords => this.setState({ keywords })}
            />
            <Icon name="ios-people" />
          </Item>
        </Form>

        {loading.models.communities && this.showLoader()}
      </View>
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
    const communities = this.selectedCommunity;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={communities}
          renderItem={data => this.renderItem(data)}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={this.renderHeader()}
        />
      </View>
    );
  }
}

export default ContentBody;
