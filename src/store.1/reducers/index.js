import { combineReducers } from "redux";
import auth from "./auth";
import castes from "./castes";
import drawer from "./drawer";
import init from "./init";
import network from "./network";
import otp from "./otp";
import session from "./session";
import users from "./users";

const rootReducer = combineReducers({
  auth,
  castes,
  drawer,
  init,
  network,
  otp,
  session,
  users
});

export { rootReducer };

