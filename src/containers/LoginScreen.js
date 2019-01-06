import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "../components/Auth/Login";
// import { login } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  session: state.session
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // login: login
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
