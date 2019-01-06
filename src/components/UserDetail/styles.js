import { StyleSheet } from "react-native";
import theme from "../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  termsWrapper: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "#d80402"
  },
  termsIcon: {
    color: "white",
    marginRight: 5
  },
  termsHeader: {
    backgroundColor: "#d80402"
  },
  termsBody: {
    fontFamily: theme.fonts.TitilliumWebRegular    
  }
});
