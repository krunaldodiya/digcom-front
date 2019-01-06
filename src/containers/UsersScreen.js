import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Users from "../components/Tabs/Users";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
