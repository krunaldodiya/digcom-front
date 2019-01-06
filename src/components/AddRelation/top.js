import { Text, View } from "native-base";
import React from "react";
import theme from "../../libs/theme";

const Top = props => {
  const { to, relation } = props;

  return (
    <View style={{ margin: 10 }}>
      <View style={{ marginBottom: 5 }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: theme.fonts.TitilliumWebSemiBold,
            color: "black"
          }}
        >
          {to.name}
        </Text>
      </View>

      {relation && (
        <View style={{ marginBottom: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: theme.fonts.TitilliumWebRegular,
              color: "red"
            }}
          >
            {relation.to_relation}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Top;
