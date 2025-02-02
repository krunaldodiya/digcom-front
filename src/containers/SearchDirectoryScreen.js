import { connect } from "react-redux";
import SearchDirectory from "../components/Community/Directory/SearchDirectory";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  directory: state.directory
});

const mapDispatchToProps = dispatch => ({
  getMembers: dispatch.directory.getMembers
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDirectory);
