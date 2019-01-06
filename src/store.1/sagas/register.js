import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest, setAuthToken } from "../../services";
import {
  GET_AUTH_USER_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_USERS
} from "../actions";

function* register(action) {
  const { mobile, navigation } = action.payload;

  try {
    yield put({ type: RESET_USERS });

    const { data } = yield call(makeRequest, api.register, { mobile });

    const { user, token } = data;

    yield call(setAuthToken, token);

    yield put({ type: REGISTER_SUCCESS });

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(getInitialScreen(user));
  } catch (error) {
    yield put({
      type: REGISTER_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* registerWatcher() {
  yield takeEvery(REGISTER, register);
}

export { registerWatcher };
