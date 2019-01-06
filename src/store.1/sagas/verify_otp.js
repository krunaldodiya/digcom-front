import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest, setAuthMobile } from "../../services";
import { VERIFY_OTP, VERIFY_OTP_FAIL, VERIFY_OTP_SUCCESS } from "../actions";

function* verifyOtp(action) {
  const { mobile, otp, navigation } = action.payload;

  try {
    yield call(makeRequest, api.verifyOtp, { mobile, otp });

    yield call(setAuthMobile, mobile);

    yield put({ type: VERIFY_OTP_SUCCESS });

    navigation.replace("AccountListScreen", { type: "login" });
  } catch (error) {
    yield put({
      type: VERIFY_OTP_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* verifyOtpWatcher() {
  yield takeEvery(VERIFY_OTP, verifyOtp);
}

export { verifyOtpWatcher };
