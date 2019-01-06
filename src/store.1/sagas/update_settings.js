import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../services";
import {
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_FAIL,
  UPDATE_SETTINGS_SUCCESS
} from "../actions";

function* updateSettings(action) {
  const { authUser, url } = action.payload;

  try {
    const { data } = yield call(makeRequest, url, authUser);
    const { user } = data;

    yield put({
      type: UPDATE_SETTINGS_SUCCESS,
      payload: { authUser: user }
    });
  } catch (error) {
    yield put({
      type: UPDATE_SETTINGS_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* updateSettingsWatcher() {
  yield takeEvery(UPDATE_SETTINGS, updateSettings);
}

export { updateSettingsWatcher };
