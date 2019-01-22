import { connect } from "react-redux";
import Help from "../components/Help";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Help);
