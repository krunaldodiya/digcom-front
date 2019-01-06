import { Alert } from "react-native";
import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import { REQUEST_OTP, REQUEST_OTP_FAIL, REQUEST_OTP_SUCCESS } from "../actions";

function* requestOtp(action) {
  const { mobile, navigation, mode } = action.payload;

  try {
    const { data } = yield call(makeRequest, api.requestOtp, { mobile });

    yield put({
      type: REQUEST_OTP_SUCCESS,
      payload: { otp: data.otp }
    });

    if (mode === "resend") {
      Alert.alert("Success", "Otp Sent!");
    } else {
      navigation.replace("VerifyOtpScreen");
    }
  } catch (error) {
    yield put({
      type: REQUEST_OTP_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* requestOtpWatcher() {
  yield takeEvery(REQUEST_OTP, requestOtp);
}

export { requestOtpWatcher };
