import { StyleSheet } from "react-native";
import theme from "../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },

  newsWrapper: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  newsImageWrapper: {
    margin: 5,
    padding: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray"
  },

  newsImage: {
    width: 80,
    height: 80
  },

  newsTitle: {
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    fontSize: 16
  },

  newsDescription: {
    fontFamily: theme.fonts.TitilliumWebRegular,
    fontSize: 14
  },

  newsDate: {
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    fontSize: 12
  }
});
