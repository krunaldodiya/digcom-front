import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Settings from "../components/Settings";
// import { deleteAccount, updateSettings } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // updateSettings: updateSettings,
      // deleteAccount: deleteAccount
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
