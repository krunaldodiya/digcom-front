import { connect } from "react-redux";
import ManageCommunity from "../components/User/ManageCommunity";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  communities: state.communities
});

const mapDispatchToProps = dispatch => ({
  getCommunities: dispatch.communities.getCommunities,
  selectCommunity: dispatch.communities.selectCommunity,
  skipCommunity: dispatch.communities.skipCommunity
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCommunity);
