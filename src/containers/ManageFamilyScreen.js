import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageFamily from "../components/ManageFamily";
// import { setAuthUser, updateAuthUser } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  castes: state.castes
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // updateAuthUser: updateAuthUser,
      // setAuthUser: setAuthUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageFamily);
