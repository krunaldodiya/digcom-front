import React from "react";
import { Modal, View, Text, TouchableHighlight } from "react-native";

export default class RelationModal extends React.Component {
  render() {
    const { modalVisible, hideModel } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => hideModel()}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => () => hideModel()}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
