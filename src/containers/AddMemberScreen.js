import { connect } from "react-redux";
import AddFamily from "../components/Family/AddFamily";

const mapStateToProps = state => ({
  loading: state.loading,
  directory: state.directory
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.directory.handleInput,
  addMember: dispatch.directory.addMember
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFamily);
