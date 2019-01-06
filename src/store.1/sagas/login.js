import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest, setAuthToken } from "../../services";
import {
  GET_AUTH_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  RESET_USERS
} from "../actions";

function* login(action) {
  const { user_id, navigation } = action.payload;

  try {
    yield put({ type: RESET_USERS });

    const { data } = yield call(makeRequest, api.login, { user_id });

    const { user, token } = data;

    yield call(setAuthToken, token);

    yield put({ type: LOGIN_SUCCESS });

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(getInitialScreen(user));
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* loginWatcher() {
  yield takeEvery(LOGIN, login);
}

export { loginWatcher };
