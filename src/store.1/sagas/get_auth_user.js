import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import {
  GET_AUTH_USER,
  GET_AUTH_USER_FAIL,
  GET_AUTH_USER_SUCCESS,
  INIT
} from "../actions";

function* getAuthUser() {
  try {
    const { data } = yield call(makeRequest, api.me, {});
    const { user } = data;

    yield put({
      type: GET_AUTH_USER_SUCCESS,
      payload: { authUser: user }
    });
    yield put({ type: INIT });
  } catch (error) {
    yield put({
      type: GET_AUTH_USER_FAIL,
      payload: { errors: error.response.data }
    });
    yield put({ type: INIT });
  }
}

function* getAuthUserWatcher() {
  yield takeEvery(GET_AUTH_USER, getAuthUser);
}

export { getAuthUserWatcher };
