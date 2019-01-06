import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "../actions";

function* getUsers(action) {
  try {
    const { data } = yield call(makeRequest, api.getUsers, {
      page: action.payload.page,
      filters: action.payload.filters
    });
    
    const { users } = data;

    yield put({
      type: GET_USERS_SUCCESS,
      payload: { users: users }
    });
  } catch (error) {
    yield put({
      type: GET_USERS_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* getUsersWatcher() {
  yield takeEvery(GET_USERS, getUsers);
}

export { getUsersWatcher };
