import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import theme from "../../libs/theme";

const relative_relations = {
  Friend: { Male: "Friend", Female: "Friend" },
  Brother: { Male: "Brother", Female: "Sister" },
  Sister: { Male: "Brother", Female: "Sister" },
  Son: { Male: "Father", Female: "Mother" },
  Daughter: { Male: "Father", Female: "Mother" },
  Father: { Male: "Son", Female: "Daughter" },
  Mother: { Male: "Son", Female: "Daughter" },
  Husband: { Female: "Wife" },
  Wife: { Male: "Husband" }
};

const user_relations = {
  Male: {
    Married: ["Friend", "Brother", "Son", "Father", "Husband"],
    Single: ["Friend", "Brother", "Son"]
  },
  Female: {
    Married: ["Friend", "Sister", "Daughter", "Mother", "Wife"],
    Single: ["Friend", "Sister", "Daughter"]
  }
};

class SelectRelation extends React.Component {
  constructor(props) {
    super(props);

    const { auth, guestUser } = props;
    const { authUser } = auth;

    this.state = {
      from: authUser,
      to: guestUser,
      from_relation: null,
      to_relation: null
    };
  }

  render() {
    const { addRelation } = this.props;
    const { from, to, from_relation, to_relation } = this.state;
    const user_relationship = user_relations[to.gender][to.marital_status];

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {user_relationship.map((user_relation, index) => {
            const { gender } = from;
            const relative_relation = relative_relations[user_relation][gender];

            return (
              <View
                style={{ marginHorizontal: 20, marginVertical: 10 }}
                key={index}
              >
                <Text
                  onPress={() =>
                    this.setState({
                      from_relation: user_relation,
                      to_relation: relative_relation
                    })
                  }
                  style={{
                    fontSize: 18,
                    fontFamily:
                      from_relation === user_relation
                        ? theme.fonts.TitilliumWebSemiBold
                        : theme.fonts.TitilliumWebRegular,
                    color: from_relation === user_relation ? "green" : "black"
                  }}
                >
                  {user_relation}
                </Text>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={() => {
            addRelation({
              type: "send",
              from: from.id,
              to: to.id,
              from_relation,
              to_relation
            });
          }}
          style={{
            alignSelf: "center",
            backgroundColor: "#d80402",
            padding: 7,
            borderRadius: 30,
            width: 140
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: theme.fonts.TitilliumWebSemiBold,
              color: "white",
              textAlign: "center"
            }}
          >
            Send Request
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SelectRelation;
