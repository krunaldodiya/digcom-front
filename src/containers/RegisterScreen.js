import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Register from "../components/Auth/Register";
// import { register } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  session: state.session
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // register: register
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
