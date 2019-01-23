import { connect } from "react-redux";
import MemberList from "../components/Community/Family/MemberList";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  family: state.family
});

const mapDispatchToProps = dispatch => ({
  removeMember: dispatch.family.removeMember,
  editMember: dispatch.family.editMember
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberList);
