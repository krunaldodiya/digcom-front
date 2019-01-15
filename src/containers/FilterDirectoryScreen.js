import { connect } from "react-redux";
import FilterDirectory from "../components/Community/Directory/FilterDirectory";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  directory: state.directory
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDirectory);
