import { Text, View } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const Switch = props => {
  const { options, selected, onChange, width } = props;

  return (
    <View style={styles.container(width)}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => onChange(option)}
          style={styles.switchOptionWrapper(
            option,
            selected,
            index,
            options.length
          )}
        >
          <Text style={styles.switchOptionText(option, selected)}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Switch;

Switch.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
