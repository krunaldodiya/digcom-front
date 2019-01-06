import { connect } from "react-redux";
import AddRelative from "../components/AddRelative";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  communities: state.communities
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRelative);
