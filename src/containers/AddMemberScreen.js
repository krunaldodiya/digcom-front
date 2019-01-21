import { connect } from "react-redux";
import AddMember from "../components/Community/Family/AddMember";

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
)(AddMember);
