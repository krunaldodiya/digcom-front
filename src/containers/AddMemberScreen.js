import { connect } from "react-redux";
import AddMember from "../components/Community/Family/AddMember";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  family: state.family
});

const mapDispatchToProps = dispatch => ({
  addMember: dispatch.family.addMember
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember);
