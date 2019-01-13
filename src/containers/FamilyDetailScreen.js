import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserDetail from "../components/UserDetail";
// import { getGuestUser, resetGuestUser } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getGuestUser: getGuestUser,
      // resetGuestUser: resetGuestUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
