import { connect } from "react-redux";
import RequestOtp from "../components/Otp/RequestOtp";

const mapStateToProps = state => ({
  loading: state.loading,
  otp: state.otp
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.otp.handleInput,
  requestOtp: dispatch.otp.requestOtp
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestOtp);
