import { StyleSheet } from "react-native";
import theme from "../../../../libs/theme";

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
    marginTop: 20,
    flexDirection: "column",
    justifyContent: 'center'
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center'
  },
  input: errors => {
    return {
      alignSelf: "center",
      borderColor: errors ? "#e74c3c" : "gray",
      width: 250,
      padding: 5,
      borderWidth: 1,
      borderRadius: 20,
      paddingLeft: 20,
      fontFamily: theme.fonts.TitilliumWebRegular,
      fontSize: 14
    };
  },
  buttonWrapper: {
    marginBottom: 10,
    justifyContent: "center",
    borderBottomWidth: 0
  },
  submitButtonWrapper: {
    marginTop: 30,
    justifyContent: 'center',
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
