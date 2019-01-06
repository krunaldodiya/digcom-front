import { StyleSheet } from "react-native";
import theme from "../../../libs/theme";

export default StyleSheet.create({
  container: width => {
    return {
      flexDirection: "row",
      width,
      margin: 5,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20
    };
  },
  switchOptionWrapper: (option, selected, index, total) => {
    return {
      flex: 1,
      backgroundColor: option === selected ? "#d80402" : "#fff",
      borderLeftWidth: index !== 0 ? 1 : 0,
      borderLeftColor: "#000",
      borderTopLeftRadius: index === 0 ? 20 : 0,
      borderBottomLeftRadius: index === 0 ? 20 : 0,
      borderTopRightRadius: index === total - 1 ? 20 : 0,
      borderBottomRightRadius: index === total - 1 ? 20 : 0,
      padding: 7
    };
  },
  switchOptionText: (option, selected) => {
    return {
      color: option === selected ? "white" : "black",
      fontSize: 14,
      textAlign: "center",
      fontFamily: theme.fonts.TitilliumWebRegular
    };
  }
});
