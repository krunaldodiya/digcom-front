import { connect } from "react-redux";
import MyCommunity from "../components/Community/MyCommunity";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCommunity);
