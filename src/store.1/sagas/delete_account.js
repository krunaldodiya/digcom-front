import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest, resetAuth } from "../../services";
import {
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_FAIL,
  DELETE_ACCOUNT_SUCCESS
} from "../actions";

function* deleteAccount(action) {
  const { navigation } = action.payload;

  try {
    yield call(makeRequest, api.deleteAccount);

    yield call(resetAuth);

    yield put({
      type: DELETE_ACCOUNT_SUCCESS,
      payload: { authUser: null }
    });

    navigation.replace("RequestOtpScreen");
  } catch (error) {
    yield put({
      type: DELETE_ACCOUNT_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* deleteAccountWatcher() {
  yield takeEvery(DELETE_ACCOUNT, deleteAccount);
}

export { deleteAccountWatcher };
