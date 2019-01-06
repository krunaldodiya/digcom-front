import { connect } from "react-redux";
import Tabs from "../components/Tabs";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  users: state.users,
  drawer: state.drawer
});

const mapDispatchToProps = dispatch => ({
  getUsers: dispatch.users.getUsers,
  toggleDrawer: dispatch.drawer.toggleDrawer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
