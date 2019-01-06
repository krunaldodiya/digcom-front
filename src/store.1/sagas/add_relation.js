import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import {
  ADD_RELATION,
  ADD_RELATION_FAIL,
  ADD_RELATION_SUCCESS
} from "../actions";

function* addRelation(action) {
  try {
    const { data } = yield call(
      makeRequest,
      api.requestRelation,
      action.payload
    );
    const { from, to } = data;

    yield put({
      type: ADD_RELATION_SUCCESS,
      payload: { authUser: from, guestUser: to }
    });
  } catch (error) {
    yield put({
      type: ADD_RELATION_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* addRelationWatcher() {
  yield takeEvery(ADD_RELATION, addRelation);
}

export { addRelationWatcher };
