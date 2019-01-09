import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import theme from "../../../libs/theme";

export default class ListModal extends React.Component {
  render() {
    const { onSelect, hideModal, data } = this.props;
    const { modalVisible, items } = data;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => hideModal()}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 20 }}>
            {items.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => onSelect(item)} key={index}>
                  <Text
                    style={{
                      fontFamily: theme.fonts.TitilliumWebSemiBold,
                      margin: 5,
                      fontSize: 16
                    }}
                  >
                    {item}
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
