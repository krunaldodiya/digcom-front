import { call, put, takeEvery } from "redux-saga/effects";
import { resetAuth } from "../../services";
import { GET_AUTH_USER_SUCCESS, LOGOUT } from "../actions";

function* logout(action) {
  const { navigation } = action.payload;

  yield call(resetAuth);

  yield put({
    type: GET_AUTH_USER_SUCCESS,
    payload: { authUser: null }
  });

  navigation.replace("RequestOtpScreen");
}

function* logoutWatcher() {
  yield takeEvery(LOGOUT, logout);
}

export { logoutWatcher };

