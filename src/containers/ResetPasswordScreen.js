import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ResetPassword from "../components/Auth/ResetPassword";

const mapStateToProps = state => ({
  loading: state.loading,
  session: state.session
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
