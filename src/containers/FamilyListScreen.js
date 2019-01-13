import { connect } from "react-redux";
import FamilyList from "../components/Community/Directory/FamilyList";

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
)(FamilyList);
