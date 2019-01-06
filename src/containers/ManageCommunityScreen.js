import { connect } from "react-redux";
import ManageCommunity from "../components/ManageCommunity";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  communities: state.communities
});

const mapDispatchToProps = dispatch => ({
  getCommunities: dispatch.communities.getCommunities,
  register: dispatch.auth.register
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCommunity);
