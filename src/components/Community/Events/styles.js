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
  termsBody: {
    flex: 1
  },
  formWrapper: {
    flex: 4,
    flexDirection: "column",
    marginTop: 20
  },
  inputWrapper: {
    borderBottomWidth: 0
  },
  input: {
    borderColor: "gray",
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    fontFamily: theme.fonts.TitilliumWebRegular
  },
  agreeWrapper: {
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 0
  },
  agreeText: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: theme.fonts.TitilliumWebSemiBold
  },
  checkBox: agree => {
    return {
      left: 1,
      top: 1,
      textAlign: "center",
      borderColor: agree ? "#ff6666" : "#ccc",
      backgroundColor: agree ? "#ff6666" : "white"
    };
  },
  buttonGroup: {
    marginTop: 0
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  submitButtonDisabled: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#ddd"
  },
  submitButtonText: {
    textAlign: "center",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "#d80402"
  },
  submitButtonTextDisabled: {
    textAlign: "center",
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: "#ccc"
  }
});
