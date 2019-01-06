import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "../components/Avatar";
// import { changeAvatar } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // changeAvatar: changeAvatar
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
