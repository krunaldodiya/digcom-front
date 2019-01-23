import { connect } from "react-redux";
import UpdateMember from "../components/Community/Family/UpdateMember";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  family: state.family
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.family.handleInput,
  updateMember: dispatch.family.updateMember,
  editMember: dispatch.family.editMember
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateMember);
