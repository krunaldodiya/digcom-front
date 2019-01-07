import { StyleSheet } from "react-native";
import theme from "../../../libs/theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  termsWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  termsHeader: {
    fontWeight: "400",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "black",
    fontSize: 16,
    textAlign: "center"
  },
  topImageWrapper: {
    alignItems: "center",
    padding: 50,
    backgroundColor: "#006feb"
  },
  topImage: {
    width: 120,
    height: 120
  },
  formWrapper: {
    marginTop: 20,
    flexDirection: "column"
  },
  inputWrapper: {
    borderBottomWidth: 0
  },
  input: errors => {
    return {
      borderColor: errors ? "#e74c3c" : "gray",
      marginHorizontal: 20,
      marginBottom: 5,
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 20,
      fontFamily: theme.fonts.TitilliumWebRegular
    };
  },
  buttonGroup: {
    marginTop: 10
  },
  buttonWrapper: {
    justifyContent: "center",
    borderBottomWidth: 0
  },
  submitButtonWrapper: {
    marginTop: 30,
    alignSelf: "center",
    borderBottomWidth: 0
  },
  submitButton: {
    backgroundColor: "#006feb",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  submitButtonText: {
    textAlign: "center",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    fontSize: 14,
    color: "white"
  }
});
