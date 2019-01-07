import { connect } from "react-redux";
import AddAccount from "../components/User/AddAccount";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.auth.handleInput,
  updateAuthUser: dispatch.auth.updateAuthUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccount);
