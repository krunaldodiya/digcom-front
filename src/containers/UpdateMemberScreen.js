import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddRelation from "../components/AddRelation";
// import { addRelation } from "../store/actions";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // addRelation: addRelation
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRelation);
