import { connect } from "react-redux";
import AddCommunity from "../components/AddCommunity";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  communities: state.communities
});

const mapDispatchToProps = dispatch => ({
  addCommunity: dispatch.communities.addCommunity
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommunity);
