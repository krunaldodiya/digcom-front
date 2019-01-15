import { connect } from "react-redux";
import MyFamily from "../components/Community/Family/MyFamily";

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
)(MyFamily);
