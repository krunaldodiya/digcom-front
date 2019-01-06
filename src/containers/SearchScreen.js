import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Search from "../components/Search";
// import { getUsers } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getUsers: getUsers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
