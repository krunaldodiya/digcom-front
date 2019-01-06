import { Text, View } from "native-base";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import theme from "../../libs/theme";

const relations = ["Father", "Mother", "Son", "Daughter", "Brother", "Sister", "Husband", "Wife"];

class FamilyForm extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ padding: 5 }}>
        <FlatList
          data={relations}
          extraData={authUser}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => {
            const { item } = data;

            return (
              <TouchableOpacity
                onPress={() => navigation.push("AddFamilyMemberScreen")}
                style={{
                  margin: 5,
                  paddingLeft: 15,
                  paddingVertical: 10,
                  borderRadius: 20
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    color: "black"
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default FamilyForm;
