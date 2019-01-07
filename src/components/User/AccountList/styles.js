import { StyleSheet } from "react-native";
import theme from "../../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  termsWrapper: {
    backgroundColor: "#d80402"
  },
  termsIcon: {
    color: "white",
    marginRight: 5
  },
  termsHeader: {
    fontWeight: "400",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "white",
    fontSize: 18
  },
});
