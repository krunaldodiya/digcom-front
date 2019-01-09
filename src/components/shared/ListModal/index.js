import { Body, Header, Icon, Left, Right } from "native-base";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import theme from "../../../libs/theme";
import styles from "./styles";

export default class ListModal extends React.Component {
  render() {
    const { onSelect, hideModal, data } = this.props;
    const { modalVisible, items } = data;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible !== false}
        onRequestClose={() => hideModal()}
      >
        <View style={{ flex: 1 }}>
          <Header style={styles.termsWrapper} androidStatusBarColor="#d80402">
            <Left>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                style={styles.termsIcon}
                onPress={() => hideModal()}
              />
            </Left>

            <Body>
              <Text numberOfLines={1} style={styles.termsHeader}>
                Select an option
              </Text>
            </Body>

            <Right />
          </Header>

          <View style={{ flex: 1, margin: 20 }}>
            {items.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onSelect(item)}
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 20,
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingVertical: 5
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.fonts.TitilliumWebRegular,
                      fontSize: 16,
                      margin: 5
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
