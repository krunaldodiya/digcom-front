import { connect } from "react-redux";
import AccountList from "../components/Auth/AccountList";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: dispatch.auth.login,
  register: dispatch.auth.register
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList);
