import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import theme from "../../../libs/theme";

const relation_data = {
  Male: ["Brother", "Son", "Father", "Husband"],
  Female: ["Sister", "Daughter", "Mother", "Wife"]
};

export default class RelationModal extends React.Component {
  render() {
    const { modalVisible, onSelect, gender } = this.props;
    const relations = relation_data[gender];

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 20 }}>
            {relations.map(relation => {
              return (
                <TouchableOpacity onPress={() => onSelect(relation)}>
                  <Text
                    style={{
                      fontFamily: theme.fonts.TitilliumWebSemiBold,
                      margin: 5,
                      fontSize: 16
                    }}
                  >
                    {relation}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    );
  }
}
