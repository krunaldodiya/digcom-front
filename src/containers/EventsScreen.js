import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Events from "../components/Community/Events";

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
)(Events);
