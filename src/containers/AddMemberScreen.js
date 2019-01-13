import { connect } from "react-redux";
import AddFamily from "../components/Family/AddFamily";

const mapStateToProps = state => ({
  loading: state.loading,
  family: state.family
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.family.handleInput,
  addMember: dispatch.family.addMember
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFamily);
