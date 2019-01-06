import { call, put, takeEvery } from "redux-saga/effects";
import { getInitialScreen } from "../../libs/screen";
import { makeRequest } from "../../services";
import {
  UPDATE_AUTH_USER,
  UPDATE_AUTH_USER_FAIL,
  UPDATE_AUTH_USER_SUCCESS
} from "../actions";

function* updateAuthUser(action) {
  const { authUser, navigation, url } = action.payload;

  try {
    const { data } = yield call(makeRequest, url, authUser);
    const { user } = data;

    yield put({
      type: UPDATE_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });

    navigation.replace(getInitialScreen(user), { user });
  } catch (error) {
    yield put({
      type: UPDATE_AUTH_USER_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* updateAuthUserWatcher() {
  yield takeEvery(UPDATE_AUTH_USER, updateAuthUser);
}

export { updateAuthUserWatcher };
